/*
  Anime Arena — High-Energy Squid Game Audio Engine (Loud BGM + Audible Bass)
*/

class TournamentAudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.volume = 1.0; // 100% Volume
    this.masterGain = null;
    this.bgmGain = null;
    this.bgmPlaying = false;
    this.bgmInterval = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        this.bgmGain = this.ctx.createGain();
        this.bgmGain.gain.setValueAtTime(0.85, this.ctx.currentTime); // LOUD BGM GAIN
        this.bgmGain.connect(this.masterGain);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  setVolume(newVolume) {
    this.volume = Math.max(0, Math.min(1, Number(newVolume) || 0));
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setValueAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime);
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setValueAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime);
    }
    return this.muted;
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(950, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(450, this.ctx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.06);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }

  playBack() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(550, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(240, this.ctx.currentTime + 0.09);
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.09);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.09);
  }

  playMatchStart() {
    this.playVersusClash();
  }

  playVersusClash() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const sub = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    sub.type = "sine";
    sub.frequency.setValueAtTime(220, now);
    sub.frequency.exponentialRampToValueAtTime(30, now + 0.75);
    subGain.gain.setValueAtTime(1.0, now);
    subGain.gain.exponentialRampToValueAtTime(0.01, now + 0.75);
    sub.connect(subGain);
    subGain.connect(this.masterGain);
    sub.start(now);
    sub.stop(now + 0.75);

    const clash = this.ctx.createOscillator();
    const clashGain = this.ctx.createGain();
    clash.type = "sawtooth";
    clash.frequency.setValueAtTime(1600, now);
    clash.frequency.exponentialRampToValueAtTime(150, now + 0.35);
    clashGain.gain.setValueAtTime(0.7, now);
    clashGain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    clash.connect(clashGain);
    clashGain.connect(this.masterGain);
    clash.start(now);
    clash.stop(now + 0.35);
  }

  playBid() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(700, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.14);
    gain.gain.setValueAtTime(0.55, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.14);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.14);
  }

  playGavel() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 0.4);
    gain.gain.setValueAtTime(1.0, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.4);
  }

  playPledge() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    [523.25, 783.99].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.06);
      gain.gain.setValueAtTime(0.4, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.06 + 0.28);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.28);
    });
  }

  playVote() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    [659.25, 880, 1318.51].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.04);
      gain.gain.setValueAtTime(0.35, now + i * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.04 + 0.22);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + i * 0.04);
      osc.stop(now + i * 0.04 + 0.22);
    });
  }

  playVictory() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + i * 0.08);
      gain.gain.setValueAtTime(0.45, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.65);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.65);
    });
  }

  playChampion() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [
      { f: 523.25, d: 0.15 },
      { f: 659.25, d: 0.15 },
      { f: 783.99, d: 0.15 },
      { f: 1046.5, d: 0.9 },
    ];
    let time = now;
    notes.forEach((n) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(n.f, time);
      gain.gain.setValueAtTime(0.55, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + n.d);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(time);
      osc.stop(time + n.d);
      time += n.d;
    });
  }

  // --- LOUD SQUID GAME SYNTH THEME ---
  startAmbientArena() {
    this.init();
    if (!this.ctx) return;
    if (this.bgmPlaying) return;

    this.bgmPlaying = true;

    const melody = [
      { f: 493.88, d: 0.35 }, // B4
      { f: 587.33, d: 0.35 }, // D5
      { f: 554.37, d: 0.35 }, // C#5
      { f: 440.00, d: 0.35 }, // A4
      { f: 493.88, d: 0.50 }, // B4
      { f: 392.00, d: 0.35 }, // G4
      { f: 369.99, d: 0.70 }, // F#4
      { f: 0, d: 0.35 },      // Rest
    ];

    let noteIdx = 0;

    const playStep = () => {
      if (!this.bgmPlaying || !this.ctx || this.muted) return;
      const now = this.ctx.currentTime;
      const note = melody[noteIdx % melody.length];

      // Loud Marching Bass
      const bass = this.ctx.createOscillator();
      const bassG = this.ctx.createGain();
      bass.type = "sawtooth";
      bass.frequency.setValueAtTime(noteIdx % 2 === 0 ? 82.41 : 65.41, now);
      bassG.gain.setValueAtTime(0.65, now);
      bassG.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
      bass.connect(bassG);
      bassG.connect(this.bgmGain);
      bass.start(now);
      bass.stop(now + 0.32);

      // Lead Synth Melody
      if (note.f > 0) {
        const lead = this.ctx.createOscillator();
        const leadG = this.ctx.createGain();
        lead.type = "square";
        lead.frequency.setValueAtTime(note.f, now);

        leadG.gain.setValueAtTime(0.05, now);
        leadG.gain.linearRampToValueAtTime(0.45, now + 0.05);
        leadG.gain.exponentialRampToValueAtTime(0.001, now + note.d);

        lead.connect(leadG);
        leadG.connect(this.bgmGain);
        lead.start(now);
        lead.stop(now + note.d);
      }

      noteIdx++;
    };

    playStep();
    this.bgmInterval = setInterval(playStep, 420);
  }

  stopBGM() {
    this.bgmPlaying = false;
    if (this.bgmInterval) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }
  }
}

export const tournamentAudio = new TournamentAudioEngine();
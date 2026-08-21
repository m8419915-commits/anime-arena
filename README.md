# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
anime-encyclopedia
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  ├─ icons.svg
│  ├─ konoha-background.png
│  └─ tournament
│     ├─ artwork
│     └─ audio
├─ README.md
├─ server
│  └─ geminiServer.js
├─ src
│  ├─ ai
│  │  └─ auctionBattleAI.js
│  ├─ api
│  │  ├─ anilist.js
│  │  └─ gemini.js
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ hero.png
│  │  ├─ react.svg
│  │  └─ vite.svg
│  ├─ components
│  │  ├─ AIBattleVerdict.jsx
│  │  ├─ AIDraftTactician.jsx
│  │  ├─ AITactician.jsx
│  │  ├─ AITournamentVerdict.jsx
│  │  ├─ AuctionAIAnalysis.jsx
│  │  ├─ AuctionBattleCard.jsx
│  │  ├─ AuctionBattleMatrix.jsx
│  │  ├─ AuctionBattleStats.jsx
│  │  ├─ AuctionCard.jsx
│  │  ├─ AuctionCompetitiveLayer.jsx
│  │  ├─ BlindReveal.jsx
│  │  └─ GameHub.jsx
│  ├─ data
│  │  └─ animeData.js
│  ├─ engine
│  │  ├─ auctionBattleEngine.js
│  │  ├─ auctionChampionshipEngine.js
│  │  ├─ auctionEngine.js
│  │  ├─ auctionMetaEngine.js
│  │  ├─ battleEngine.js
│  │  ├─ blindTournamentEngine.js
│  │  ├─ survivalEngine.js
│  │  └─ tournamentEngine.js
│  ├─ index.css
│  ├─ main.jsx
│  ├─ modes
│  │  ├─ AuctionBattle.jsx
│  │  ├─ AuctionMode.jsx
│  │  ├─ BattleMode.jsx
│  │  ├─ FinalBattle.jsx
│  │  └─ TournamentMode.jsx
│  └─ tournament
│     ├─ ai
│     ├─ audio
│     │  └─ tournamentAudio.js
│     ├─ components
│     │  ├─ AuctionRoom.jsx
│     │  ├─ DistributionChoice.jsx
│     │  ├─ DistributionLobby.jsx
│     │  ├─ DistributionResults.jsx
│     │  ├─ LiveCanonIntegrityPanel.jsx
│     │  ├─ TournamentBracket.jsx
│     │  ├─ TournamentCard.jsx
│     │  ├─ TournamentHome.jsx
│     │  ├─ TournamentMatch.jsx
│     │  ├─ TournamentPostShow.jsx
│     │  └─ TournamentSetup.jsx
│     ├─ data
│     │  ├─ characterIntelDatabase.js
│     │  ├─ characters
│     │  │  ├─ attackOnTitan.js
│     │  │  ├─ berserk.js
│     │  │  ├─ blackClover.js
│     │  │  ├─ bleach.js
│     │  │  ├─ boruto.js
│     │  │  ├─ chainsawMan.js
│     │  │  ├─ codeGeass.js
│     │  │  ├─ demonSlayer.js
│     │  │  ├─ dragonBall.js
│     │  │  ├─ dragonQuest.js
│     │  │  ├─ drStone.js
│     │  │  ├─ fairyTail.js
│     │  │  ├─ fate.js
│     │  │  ├─ fireForce.js
│     │  │  ├─ fullmetalAlchemist.js
│     │  │  ├─ hunterXHunter.js
│     │  │  ├─ invincible.js
│     │  │  ├─ jojosBizarreAdventure.js
│     │  │  ├─ jujutsuKaisen.js
│     │  │  ├─ mobPsycho100.js
│     │  │  ├─ myHeroAcademia.js
│     │  │  ├─ naruto.js
│     │  │  ├─ onePiece.js
│     │  │  ├─ onePunchMan.js
│     │  │  ├─ sevenDeadlySins.js
│     │  │  ├─ soloLeveling.js
│     │  │  ├─ swordArtOnline.js
│     │  │  ├─ thatTimeIGotReincarnatedAsASlime.js
│     │  │  ├─ tokyoGhoul.js
│     │  │  ├─ vagabond.js
│     │  │  └─ vinlandSaga.js
│     │  ├─ databaseSchema.js
│     │  ├─ tournamentConfig.js
│     │  ├─ tournamentDatabase.js
│     │  ├─ tournamentImageResolver.js
│     │  └─ tournamentVerses.js
│     ├─ engine
│     │  ├─ auctionEngine.js
│     │  ├─ bracketMath.js
│     │  ├─ eventFactory.js
│     │  ├─ formEngine.js
│     │  ├─ matchVotingEngine.js
│     │  ├─ playerRulesEngine.js
│     │  ├─ progressionEngine.js
│     │  ├─ randomDistributionEngine.js
│     │  ├─ rosterEngine.js
│     │  ├─ seedingEngine.js
│     │  ├─ tieBreakerEngine.js
│     │  ├─ tournamentBattleEngine.js
│     │  ├─ tournamentDatabase.js
│     │  ├─ tournamentDatabaseUtils.js
│     │  ├─ tournamentEngineValidator.js
│     │  ├─ tournamentFlowEngine.js
│     │  ├─ tournamentIntegrityEngine.js
│     │  ├─ tournamentMatchController.js
│     │  ├─ tournamentRecords.js
│     │  └─ tournamentSave.js
│     └─ styles
│        └─ tournament.css
└─ vite.config.js

```
```
anime-encyclopedia
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  ├─ icons.svg
│  ├─ konoha-background.png
│  └─ tournament
│     ├─ artwork
│     │  └─ placeholder.webp
│     └─ audio
├─ README.md
├─ server
│  └─ geminiServer.js
├─ src
│  ├─ ai
│  │  └─ auctionBattleAI.js
│  ├─ api
│  │  ├─ anilist.js
│  │  └─ gemini.js
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ hero.png
│  │  ├─ react.svg
│  │  └─ vite.svg
│  ├─ components
│  │  ├─ AIBattleVerdict.jsx
│  │  ├─ AIDraftTactician.jsx
│  │  ├─ AITactician.jsx
│  │  ├─ AITournamentVerdict.jsx
│  │  ├─ AuctionAIAnalysis.jsx
│  │  ├─ AuctionBattleCard.jsx
│  │  ├─ AuctionBattleMatrix.jsx
│  │  ├─ AuctionBattleStats.jsx
│  │  ├─ AuctionCard.jsx
│  │  ├─ AuctionCompetitiveLayer.jsx
│  │  ├─ BlindReveal.jsx
│  │  └─ GameHub.jsx
│  ├─ data
│  │  └─ animeData.js
│  ├─ engine
│  │  ├─ auctionBattleEngine.js
│  │  ├─ auctionChampionshipEngine.js
│  │  ├─ auctionEngine.js
│  │  ├─ auctionMetaEngine.js
│  │  ├─ battleEngine.js
│  │  ├─ blindTournamentEngine.js
│  │  ├─ survivalEngine.js
│  │  └─ tournamentEngine.js
│  ├─ index.css
│  ├─ main.jsx
│  ├─ modes
│  │  ├─ AuctionBattle.jsx
│  │  ├─ AuctionMode.jsx
│  │  ├─ BattleMode.jsx
│  │  ├─ FinalBattle.jsx
│  │  └─ TournamentMode.jsx
│  └─ tournament
│     ├─ ai
│     ├─ audio
│     │  └─ tournamentAudio.js
│     ├─ components
│     │  ├─ AuctionRoom.jsx
│     │  ├─ DistributionChoice.jsx
│     │  ├─ DistributionLobby.jsx
│     │  ├─ DistributionResults.jsx
│     │  ├─ LiveCanonIntegrityPanel.jsx
│     │  ├─ TournamentBracket.jsx
│     │  ├─ TournamentCard.jsx
│     │  ├─ TournamentHome.jsx
│     │  ├─ TournamentMatch.jsx
│     │  ├─ TournamentPostShow.jsx
│     │  ├─ TournamentSetup.jsx
│     │  └─ VerifiedArtwork.jsx
│     ├─ data
│     │  ├─ characterIdentity.js
│     │  ├─ characterIntelDatabase.js
│     │  ├─ characters
│     │  │  ├─ attackOnTitan.js
│     │  │  ├─ berserk.js
│     │  │  ├─ blackClover.js
│     │  │  ├─ bleach.js
│     │  │  ├─ boruto.js
│     │  │  ├─ chainsawMan.js
│     │  │  ├─ codeGeass.js
│     │  │  ├─ demonSlayer.js
│     │  │  ├─ dragonBall.js
│     │  │  ├─ dragonQuest.js
│     │  │  ├─ drStone.js
│     │  │  ├─ fairyTail.js
│     │  │  ├─ fate.js
│     │  │  ├─ fireForce.js
│     │  │  ├─ fullmetalAlchemist.js
│     │  │  ├─ hunterXHunter.js
│     │  │  ├─ invincible.js
│     │  │  ├─ jojosBizarreAdventure.js
│     │  │  ├─ jujutsuKaisen.js
│     │  │  ├─ mobPsycho100.js
│     │  │  ├─ myHeroAcademia.js
│     │  │  ├─ naruto.js
│     │  │  ├─ onePiece.js
│     │  │  ├─ onePunchMan.js
│     │  │  ├─ sevenDeadlySins.js
│     │  │  ├─ soloLeveling.js
│     │  │  ├─ swordArtOnline.js
│     │  │  ├─ thatTimeIGotReincarnatedAsASlime.js
│     │  │  ├─ tokyoGhoul.js
│     │  │  ├─ vagabond.js
│     │  │  └─ vinlandSaga.js
│     │  ├─ databaseSchema.js
│     │  ├─ tournamentArtworkVerifier.js
│     │  ├─ tournamentCharacterIdentity.js
│     │  ├─ tournamentConfig.js
│     │  ├─ tournamentDatabase.js
│     │  ├─ tournamentImageResolver.js
│     │  └─ tournamentVerses.js
│     ├─ engine
│     │  ├─ auctionEngine.js
│     │  ├─ bracketMath.js
│     │  ├─ eventFactory.js
│     │  ├─ formEngine.js
│     │  ├─ matchVotingEngine.js
│     │  ├─ playerRulesEngine.js
│     │  ├─ progressionEngine.js
│     │  ├─ randomDistributionEngine.js
│     │  ├─ rosterEngine.js
│     │  ├─ seedingEngine.js
│     │  ├─ tieBreakerEngine.js
│     │  ├─ tournamentBattleEngine.js
│     │  ├─ tournamentDatabase.js
│     │  ├─ tournamentDatabaseUtils.js
│     │  ├─ tournamentEngineValidator.js
│     │  ├─ tournamentFlowEngine.js
│     │  ├─ tournamentIntegrityEngine.js
│     │  ├─ tournamentMatchController.js
│     │  ├─ tournamentRecords.js
│     │  └─ tournamentSave.js
│     ├─ styles
│     │  └─ tournament.css
│     └─ utils
│        └─ identity.js
└─ vite.config.js

```
```
anime-encyclopedia
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  ├─ icons.svg
│  ├─ konoha-background.png
│  └─ tournament
│     ├─ artwork
│     │  └─ placeholder.webp
│     └─ audio
├─ README.md
├─ server
│  └─ geminiServer.js
├─ src
│  ├─ ai
│  │  └─ auctionBattleAI.js
│  ├─ api
│  │  ├─ anilist.js
│  │  └─ gemini.js
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ hero.png
│  │  ├─ react.svg
│  │  └─ vite.svg
│  ├─ components
│  │  ├─ AIBattleVerdict.jsx
│  │  ├─ AIDraftTactician.jsx
│  │  ├─ AITactician.jsx
│  │  ├─ AITournamentVerdict.jsx
│  │  ├─ AuctionAIAnalysis.jsx
│  │  ├─ AuctionBattleCard.jsx
│  │  ├─ AuctionBattleMatrix.jsx
│  │  ├─ AuctionBattleStats.jsx
│  │  ├─ AuctionCard.jsx
│  │  ├─ AuctionCompetitiveLayer.jsx
│  │  ├─ BlindReveal.jsx
│  │  └─ GameHub.jsx
│  ├─ data
│  │  └─ animeData.js
│  ├─ engine
│  │  ├─ auctionBattleEngine.js
│  │  ├─ auctionChampionshipEngine.js
│  │  ├─ auctionEngine.js
│  │  ├─ auctionMetaEngine.js
│  │  ├─ battleEngine.js
│  │  ├─ blindTournamentEngine.js
│  │  ├─ survivalEngine.js
│  │  └─ tournamentEngine.js
│  ├─ index.css
│  ├─ main.jsx
│  ├─ modes
│  │  ├─ AuctionBattle.jsx
│  │  ├─ AuctionMode.jsx
│  │  ├─ BattleMode.jsx
│  │  ├─ FinalBattle.jsx
│  │  └─ TournamentMode.jsx
│  └─ tournament
│     ├─ ai
│     ├─ audio
│     │  └─ tournamentAudio.js
│     ├─ components
│     │  ├─ AuctionRoom.jsx
│     │  ├─ DistributionChoice.jsx
│     │  ├─ DistributionLobby.jsx
│     │  ├─ DistributionResults.jsx
│     │  ├─ LiveCanonIntegrityPanel.jsx
│     │  ├─ TournamentBracket.jsx
│     │  ├─ TournamentCard.jsx
│     │  ├─ TournamentHome.jsx
│     │  ├─ TournamentMatch.jsx
│     │  ├─ TournamentPostShow.jsx
│     │  ├─ TournamentSetup.jsx
│     │  └─ VerifiedArtwork.jsx
│     ├─ data
│     │  ├─ characterIdentity.js
│     │  ├─ characterIntelDatabase.js
│     │  ├─ characters
│     │  │  ├─ attackOnTitan.js
│     │  │  ├─ berserk.js
│     │  │  ├─ blackClover.js
│     │  │  ├─ bleach.js
│     │  │  ├─ boruto.js
│     │  │  ├─ chainsawMan.js
│     │  │  ├─ codeGeass.js
│     │  │  ├─ demonSlayer.js
│     │  │  ├─ dragonBall.js
│     │  │  ├─ dragonQuest.js
│     │  │  ├─ drStone.js
│     │  │  ├─ fairyTail.js
│     │  │  ├─ fate.js
│     │  │  ├─ fireForce.js
│     │  │  ├─ fullmetalAlchemist.js
│     │  │  ├─ hunterXHunter.js
│     │  │  ├─ invincible.js
│     │  │  ├─ jojosBizarreAdventure.js
│     │  │  ├─ jujutsuKaisen.js
│     │  │  ├─ mobPsycho100.js
│     │  │  ├─ myHeroAcademia.js
│     │  │  ├─ naruto.js
│     │  │  ├─ onePiece.js
│     │  │  ├─ onePunchMan.js
│     │  │  ├─ sevenDeadlySins.js
│     │  │  ├─ soloLeveling.js
│     │  │  ├─ swordArtOnline.js
│     │  │  ├─ thatTimeIGotReincarnatedAsASlime.js
│     │  │  ├─ tokyoGhoul.js
│     │  │  ├─ vagabond.js
│     │  │  └─ vinlandSaga.js
│     │  ├─ databaseSchema.js
│     │  ├─ tournamentArtworkVerifier.js
│     │  ├─ tournamentCharacterIdentity.js
│     │  ├─ tournamentConfig.js
│     │  ├─ tournamentDatabase.js
│     │  ├─ tournamentImageResolver.js
│     │  └─ tournamentVerses.js
│     ├─ engine
│     │  ├─ auctionEngine.js
│     │  ├─ bracketMath.js
│     │  ├─ eventFactory.js
│     │  ├─ formEngine.js
│     │  ├─ matchVotingEngine.js
│     │  ├─ playerRulesEngine.js
│     │  ├─ progressionEngine.js
│     │  ├─ randomDistributionEngine.js
│     │  ├─ rosterEngine.js
│     │  ├─ seedingEngine.js
│     │  ├─ tieBreakerEngine.js
│     │  ├─ tournamentBattleEngine.js
│     │  ├─ tournamentDatabase.js
│     │  ├─ tournamentDatabaseUtils.js
│     │  ├─ tournamentEngineValidator.js
│     │  ├─ tournamentFlowEngine.js
│     │  ├─ tournamentIntegrityEngine.js
│     │  ├─ tournamentMatchController.js
│     │  ├─ tournamentRecords.js
│     │  └─ tournamentSave.js
│     ├─ styles
│     │  └─ tournament.css
│     └─ utils
│        └─ identity.js
└─ vite.config.js

```
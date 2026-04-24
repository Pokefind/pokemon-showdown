export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	thickclub: {
		inherit: true,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Cubone' || pokemon.baseSpecies.baseSpecies === 'Marowak') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Marowak", "Marowak-Alola", "Marowak-Alola-Totem", "Cubone", "Marowak-Shadow", "Alolan Marowak",
			"Kyoto Marowak"],
	},
	souldew: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (
				move && (user.baseSpecies.num === 380 || user.baseSpecies.num === 381) &&
				(move.type === 'Psychic' || move.type === 'Dragon')
			) {
				return this.chainModify([4915, 4096]);
			}
		},
		itemUser: ["Latios", "Latias", "Haikou Latias", "Haikou Latios"],
	},
	reek: {
		name: "Reek",
		fling: {
			basePower: 60,
		},
		spritenum: 475,
		onModifyCritRatio(critRatio, user) {
			if (["farfetchd", "sirfetchd"].includes(this.toID(user.baseSpecies.baseSpecies))) {
				return critRatio + 2;
			}
		},
		itemUser: ["Farfetch\u2019d", "Farfetch\u2019d-Galar", "Sirfetch\u2019d"],
		num: 259,
		gen: 8,
		isNonstandard: "Past",
	},	
	lightball: {
		name: "Light Ball",
		spritenum: 251,
		fling: {
			basePower: 30,
			status: 'par',
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Pikachu') {
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Pikachu') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Chubachu", "Pikachu", "Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World"],
		num: 236,
		gen: 2,
	},
	eviolite: {
	inherit: true,

	onModifyDef(def, pokemon) {
		const banned = ['primeape', 'bisharp', 'dunsparce', 'girafarig', 'ursaring', 'zeinovabisharp', 'jatarodunsparce', 'jataroursaring', 'stantler', 'basculin'];

		if (banned.includes(this.toID(pokemon.baseSpecies.name))) return;

		if (pokemon.baseSpecies.nfe) {
			return this.chainModify(1.5);
		}
	},

	onModifySpD(spd, pokemon) {
		const banned = ['primeape', 'bisharp', 'dunsparce', 'girafarig', 'ursaring', 'zeinovabisharp', 'jatarodunsparce', 'jataroursaring', 'stantler', 'basculin'];

		if (banned.includes(this.toID(pokemon.baseSpecies.name))) return;

		if (pokemon.baseSpecies.nfe) {
			return this.chainModify(1.5);
		}
	},
},
};

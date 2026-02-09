export const Items: {[k: string]: ModdedItemData} = {
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

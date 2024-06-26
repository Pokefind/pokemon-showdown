export const Moves: { [k: string]: ModdedMoveData } = {
	vicegrip: {
		num: 11,
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Vice Grip",
		pp: 30,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough"
	},
	"shadowrush": {
		num: 10001,
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Shadow Rush",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,

		},
		secondary: null,
		target: "normal",
		type: "Shadow"
	},
	"shadowblast": {
		num: 10002,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Shadow Blast",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,

		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Shadow"
	},
	"shadowblitz": {
		num: 10003,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Shadow Blitz",
		pp: 20,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,

		},
		secondary: null,
		target: "normal",
		type: "Shadow"
	},
	"shadowbolt": {
		num: 10004,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Shadow Bolt",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,

		},
		secondary: {
			chance: 10,
			status: "par"
		},
		target: "normal",
		type: "Shadow"

	},
	"shadowbreak": {
		num: 10005,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Shadow Break",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,

		},
		secondary: null,
		target: "normal",
		type: "Shadow"
	},
	"shadowchill": {
		num: 10006,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Shadow Chill",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,

		},
		secondary: {
			chance: 10,
			status: "frz"
		},
		target: "normal",
		type: "Shadow"
	},
	"shadowend": {
		num: 10007,
		accuracy: 60,
		basePower: 120,
		category: "Physical",
		name: "Shadow End",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			heal: 1,

		},
		secondary: null,
		target: "normal",
		type: "Shadow",
		mindBlownRecoil: true,
		onAfterMove(pokemon, target, move) {
			if (move.mindBlownRecoil && !move.multihit) {
				const hpBeforeRecoil = pokemon.hp;
				this.damage(Math.round(hpBeforeRecoil / 2), pokemon, pokemon, this.dex.conditions.get("Mind Blown"), true);
				if (pokemon.hp <= pokemon.maxhp / 2 && hpBeforeRecoil > pokemon.maxhp / 2) {
					this.runEvent("EmergencyExit", pokemon, pokemon);
				}
			}
		}
	},
	"shadowfire": {
		num: 10008,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Shadow Fire",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,

		},
		secondary: {
			chance: 10,
			status: "brn"
		},
		target: "normal",
		type: "Shadow"
	},
	"shadowrave": {
		num: 10009,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Shadow Rave",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,

		},
		secondary: {
			chance: 10,
			boosts: {
				spa: -1
			}
		},
		target: "allAdjacentFoes",
		type: "Shadow"
	},
	"shadowstorm": {
		num: 10010,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Shadow Storm",
		pp: 10,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,

		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Shadow"
	},
	"shadowwave": {
		num: 10011,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Shadow Wave",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,

		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Shadow"
	},
	"shadowdown": {
		num: 10012,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Shadow Down",
		pp: 20,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1,  },
		boosts: {
			def: -2
		},
		target: "allAdjacentFoes",
		type: "Shadow"
	},
	"shadowhalf": {
		num: 10013,
		accuracy: 100,
		basePower: 0,
		category: "Special",
		name: "Shadow Half",
		pp: 5,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			recharge: 1,

		},
		damageCallback(pokemon, target) {
			return this.clampIntRange(target.getUndynamaxedHP() / 2, 1);
		},
		target: "all",
		type: "Shadow"
	},
	"shadowhold": {
		num: 10014,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shadow Hold",
		pp: 10,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1,  },
		volatileStatus: "partiallytrapped",
		secondary: null,
		target: "allAdjacentFoes",
		type: "Shadow",
		onHit(target, source, move) {
			return target.addVolatile("trapped", source, move, "trapper");
		}
	},
	"shadowsky": {
		num: 10015,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shadow Sky",
		pp: 5,
		priority: 0,
		weather: "ShadowSky",
		flags: {  },
		secondary: null,
		target: "all",
		type: "Shadow"
	},
	"shadowshed": {
		num: 10016,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Shadow Shed",
		pp: 20,
		priority: 0,
		flags: { snatch: 1,  },
		onHit(target, source) {
			target.side.removeSideCondition("reflect");
			target.side.removeSideCondition("lightscreen");
			target.side.removeSideCondition("safeguard");
		},
		secondary: null,
		target: "all",
		type: "Shadow"
	},
	"shadowpanic": {
		num: 10017,
		accuracy: 60,
		basePower: 0,
		category: "Status",
		name: "Shadow Panic",
		pp: 20,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1 },
		volatileStatus: "confusion",
		secondary: null,
		target: "allAdjacentFoes",
		type: "Shadow"
	},
	"shadowmist": {
		num: 10018,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Shadow Mist",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1 },
		boosts: {
			evasion: -2
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Shadow"
	},
	"savagescratch": {
		num: 10019,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Savage Scratch",
		pp: 35,
		priority: 0,
		flags: { contact: 1, protect: 1 },
		secondary: null,
		target: "normal",
		type: "Normal"
	},
	"glaring": {
		num: 10020,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Glaring",
		pp: 30,
		priority: 0,
		flags: { protect: 1 },
		boosts: {
			def: -2
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal"
	},
	"savagebite": {
		num: 10021,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Savage Bite",
		pp: 25,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1 },
		secondary: {
			chance: 100,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Dark"
	},
	"opbite": {
		num: 10022,
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		name: "OP Bite",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1 },
		secondary: {
			chance: 20,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Dark"
	},
	"furiousswipes": {
		num: 10023,
		accuracy: 80,
		basePower: 23,
		category: "Physical",
		name: "Furious Swipes",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1 },
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal"
	},
	"savagefang": {
		num: 10024,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Savage Fang",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1 },
		secondary: {
			chance: 10,
			volatileStatus: "flinch"
		},
		target: "normal",
		type: "Normal"
	},
	metronome: {
		inherit: true,
		onHit(target, source, effect) {
			const moves = this.dex.moves.all().filter(move => (
				(![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
				(!move.isNonstandard || move.isNonstandard === 'Unobtainable') &&
				move.flags['metronome'] &&
				move.gen < 8
			));
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) return false;
			source.side.lastSelectedMove = this.toID(randomMove);
			this.actions.useMove(randomMove, target);
		},
	},
};

/*global require, global:false, chem:false*/

var Map = require('../util/map');

function el(label, period, group, putHydrogenOnTheLeft, color) {
	return {
		label: label,
		period: period,
		group: group,
		putHydrogenOnTheLeft: putHydrogenOnTheLeft,
		color: color || '#000000'
	};
};

var element = new Map({
	1: el( 'H', 1, 1, false, '#000000'),
	2: el('He', 1, 8, false, '#d9ffff'),
	3: el('Li', 2, 1, false, '#cc80ff'),
	4: el('Be', 2, 2, false, '#c2ff00'),
	5: el( 'B', 2, 3, false, '#ffb5b5'),
	6: el( 'C', 2, 4, false, '#000000'),
	7: el( 'N', 2, 5, false, '#304ff7'),
	8: el( 'O', 2, 6, true, '#ff0d0d'),
	9: el( 'F', 2, 7, true, '#8fe04f'),
	10: el('Ne', 2, 8, false, '#b3e3f5'),
	11: el('Na', 3, 1, false, '#ab5cf2'),
	12: el('Mg', 3, 2, false, '#8aff00'),
	13: el('Al', 3, 3, false, '#bfa6a6'),
	14: el('Si', 3, 4, false, '#f0c7a1'),
	15: el( 'P', 3, 5, false, '#ff8000'),
	16: el( 'S', 3, 6, true, '#d9a61a'),
	17: el('Cl', 3, 7, true, '#1fd01f'),
	18: el('Ar', 3, 8, false, '#80d1e3'),
	19: el( 'K', 4, 1, false, '#8f40d4'),
	20: el('Ca', 4, 2, false, '#3dff00'),
	21: el('Sc', 4, 3, false, '#e6e6e6'),
	22: el('Ti', 4, 4, false, '#bfc2c7'),
	23: el( 'V', 4, 5, false, '#a6a6ab'),
	24: el('Cr', 4, 6, false, '#8a99c7'),
	25: el('Mn', 4, 7, false, '#9c7ac7'),
	26: el('Fe', 4, 8, false, '#e06633'),
	27: el('Co', 4, 8, false, '#f08fa1'),
	28: el('Ni', 4, 8, false, '#4fd14f'),
	29: el('Cu', 4, 1, false, '#c78033'),
	30: el('Zn', 4, 2, false, '#7d80b0'),
	31: el('Ga', 4, 3, false, '#c28f8f'),
	32: el('Ge', 4, 4, false, '#668f8f'),
	33: el('As', 4, 5, false, '#bd80e3'),
	34: el('Se', 4, 6, true, '#ffa100'),
	35: el('Br', 4, 7, true, '#a62929'),
	36: el('Kr', 4, 8, false, '#5cb8d1'),
	37: el('Rb', 5, 1, false, '#702eb0'),
	38: el('Sr', 5, 2, false, '#00ff00'),
	39: el( 'Y', 5, 3, false, '#94ffff'),
	40: el('Zr', 5, 4, false, '#94e0e0'),
	41: el('Nb', 5, 5, false, '#73c2c9'),
	42: el('Mo', 5, 6, false, '#54b5b5'),
	43: el('Tc', 5, 7, false, '#3b9e9e'),
	44: el('Ru', 5, 8, false, '#248f8f'),
	45: el('Rh', 5, 8, false, '#0a7d8c'),
	46: el('Pd', 5, 8, false, '#006985'),
	47: el('Ag', 5, 1, false, '#bfbfbf'),
	48: el('Cd', 5, 2, false, '#ffd98f'),
	49: el('In', 5, 3, false, '#a67573'),
	50: el('Sn', 5, 4, false, '#668080'),
	51: el('Sb', 5, 5, false, '#9e63b5'),
	52: el('Te', 5, 6, false, '#d47a00'),
	53: el( 'I', 5, 7, true, '#940094'),
	54: el('Xe', 5, 8, false, '#429eb0'),
	55: el('Cs', 6, 1, false, '#57178f'),
	56: el('Ba', 6, 2, false, '#00c900'),
	57: el('La', 6, 3, false, '#70d4ff'),
	58: el('Ce', 6, 3, false, '#ffffc7'),
	59: el('Pr', 6, 3, false, '#d9ffc7'),
	60: el('Nd', 6, 3, false, '#c7ffc7'),
	61: el('Pm', 6, 3, false, '#a3ffc7'),
	62: el('Sm', 6, 3, false, '#8fffc7'),
	63: el('Eu', 6, 3, false, '#61ffc7'),
	64: el('Gd', 6, 3, false, '#45ffc7'),
	65: el('Tb', 6, 3, false, '#30ffc7'),
	66: el('Dy', 6, 3, false, '#1fffc7'),
	67: el('Ho', 6, 3, false, '#00ff9c'),
	68: el('Er', 6, 3, false, '#00e675'),
	69: el('Tm', 6, 3, false, '#00d452'),
	70: el('Yb', 6, 3, false, '#00bf38'),
	71: el('Lu', 6, 3, false, '#00ab24'),
	72: el('Hf', 6, 4, false, '#4dc2ff'),
	73: el('Ta', 6, 5, false, '#4da6ff'),
	74: el( 'W', 6, 6, false, '#2194d6'),
	75: el('Re', 6, 7, false, '#267dab'),
	76: el('Os', 6, 8, false, '#266696'),
	77: el('Ir', 6, 8, false, '#175487'),
	78: el('Pt', 6, 8, false, '#d1d1e0'),
	79: el('Au', 6, 1, false, '#ffd124'),
	80: el('Hg', 6, 2, false, '#b8b8d1'),
	81: el('Tl', 6, 3, false, '#a6544d'),
	82: el('Pb', 6, 4, false, '#575961'),
	83: el('Bi', 6, 5, false, '#9e4fb5'),
	84: el('Po', 6, 6, false, '#ab5c00'),
	85: el('At', 6, 7, false, '#754f45'),
	86: el('Rn', 6, 8, false, '#428296'),
	87: el('Fr', 7, 1, false, '#420066'),
	88: el('Ra', 7, 2, false, '#007d00'),
	89: el('Ac', 7, 3, false, '#70abfa'),
	90: el('Th', 7, 3, false, '#00baff'),
	91: el('Pa', 7, 3, false, '#00a1ff'),
	92: el( 'U', 7, 3, false, '#008fff'),
	93: el('Np', 7, 3, false, '#0080ff'),
	94: el('Pu', 7, 3, false, '#006bff'),
	95: el('Am', 7, 3, false, '#545cf2'),
	96: el('Cm', 7, 3, false, '#785ce3'),
	97: el('Bk', 7, 3, false, '#8a4fe3'),
	98: el('Cf', 7, 3, false, '#a136d4'),
	99: el('Es', 7, 3, false, '#b31fd4'),
	// TODO need to fix colors for the elements below
	100: el('Fm', 7, 3, false, '#000000'),
	101: el('Md', 7, 3, false, '#000000'),
	102: el('No', 7, 3, false, '#000000'),
	103: el('Lr', 7, 3, false, '#000000'),
	104: el('Rf', 7, 4, false, '#4dc2ff'),
	105: el('Db', 7, 5, false, '#4da6ff'),
	106: el('Sg', 7, 6, false, '#2194d6'),
	107: el('Bh', 7, 7, false, '#267dab'),
	108: el('Hs', 7, 8, false, '#266696'),
	109: el('Mt', 7, 8, false, '#175487'),
	110: el('Ds', 7, 8, false, '#d1d1e0'),
	111: el('Rg', 7, 1, false, '#ffd124'),
	112: el('Cn', 7, 2, false, '#b8b8d1'),
	113: el('Uut', 7, 3, false),
	114: el('Fl', 7, 4, false),
	115: el('Uup', 7, 5, false),
	116: el('Lv', 7, 6, false),
	117: el('Uus', 7, 7, false),
	118: el('Uuo', 7, 8, false)
});

var labelMap = null;
element.getElementByLabel = function (label) {
	if (!labelMap) {
		labelMap = {};
		element.each(function (key, value) {
			labelMap[value.label] = key - 0;
		});
	}
	if (!labelMap.hasOwnProperty(label)) {
		return null;
	}
	return labelMap[label];
};

module.exports = element;

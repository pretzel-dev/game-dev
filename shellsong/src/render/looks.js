/** Every colour you can choose for your mermaid (and your throne). */
export const LOOKS = {
  hair: {
    label: 'Hair',
    colors: {
      gold: 0xf2c94a,
      honey: 0xd89a3a,
      brown: 0x7a4a2a,
      black: 0x2a1d1a,
      red: 0xd2502a,
      pink: 0xff8ac8,
      purple: 0xa86af2,
      blue: 0x4aa8ff,
      mint: 0x6af0c0,
      silver: 0xe8e8f4,
    },
  },
  skin: {
    label: 'Skin',
    colors: {
      porcelain: 0xffe4d0,
      peach: 0xf8d0b0,
      tan: 0xe0a87a,
      caramel: 0xc0845a,
      cocoa: 0x8a5a3a,
      deep: 0x5a3a28,
      seagreen: 0xa8e8c8,
      lilac: 0xd8c8f8,
    },
  },
  top: {
    label: 'Shell top',
    colors: {
      pink: 0xff8ab0,
      purple: 0xb07aff,
      gold: 0xf2c94a,
      white: 0xfff4f0,
      blue: 0x5ab0ff,
      coral: 0xff7a5a,
      mint: 0x6af0c0,
    },
  },
  tail: {
    label: 'Tail',
    colors: {
      teal: 0x2ac0b0,
      purple: 0x9a5af2,
      pink: 0xff6aa8,
      blue: 0x2a7aff,
      green: 0x3ac06a,
      gold: 0xf2b83a,
      coral: 0xff7a5a,
      silver: 0xc8d0e0,
    },
  },
  crown: {
    label: 'Crown',
    colors: {
      gold: 0xf2c94a,
      silver: 0xdde4ee,
      rose: 0xf2a8a0,
      pearl: 0xfff4f8,
      crystal: 0xa8e8ff,
      pink: 0xff8ac8,
    },
  },
  throne: {
    label: 'Throne',
    colors: {
      pink: 0xffa8c8,
      purple: 0xc0a0ff,
      blue: 0x8ac8ff,
      gold: 0xf2c94a,
      white: 0xfff4f0,
      mint: 0x9af0d0,
      coral: 0xff9a7a,
    },
  },
};

export const DEFAULT_LOOK = { hair: 'gold', skin: 'peach', top: 'pink', tail: 'teal', crown: 'gold', throne: 'pink' };

/** The colour (as a number) for one part of a look, falling back to the default. */
export function colorOf(look, part) {
  const set = LOOKS[part].colors;
  return set[look?.[part]] ?? set[DEFAULT_LOOK[part]];
}

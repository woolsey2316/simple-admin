module.exports = {
  prefix: '',
  important: false,
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // purge: ["./src/*.html"],
  theme: {
    fontFamily: {
      'IBM-plex-sans': ['IBM Plex Sans', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'source-sans': ['Source Sans Pro', 'sans-serif']
    },
    extend: {
      boxShadow: {
        DEFAULT: '0 6px 12px 0 rgba(0, 0, 0, 0.15)',
      },
      flex: {
        'break' : '1 1 100%'
      },
      borderRadius: {
        '4px': '4px'
      },
      colors: {
        'steel-teal': '5c8697',
        'silver': '#c9c9c9',
        'informational': '#3B5371',
        'warning': '#f2cc41',
        'true-blue': "#3968ae",
        'maroon': '#7C0C12',
        'matrix-green': '#92cbba',
        'matrix-blue': '#3A68AF',
        'dark-goldenrod': '#AD8E1B',
        'windsor-tan': '#A34F1A',
        // text inner shadow trick needs some opacity to work
        'true-blue-90': "rgba(57, 104, 174, 0.9)",
        'maroon-90': 'rgba(124, 12, 18, 0.9)',
        'matrix-green-90': 'rgba(146, 203, 186, 0.9)',
        'matrix-blue-90': 'rgba(58, 104, 175, 0.9)',
        'dark-goldenrod-90': 'rgba(173, 142, 27, 0.9)',
        'windsor-tan-90': 'rgba(163, 79, 26, 0.9)',
        gray: {
          '50': '#EAEAEA',
          '100': '#eeeeee',
          '150': '#d8d8d8',
          '200': '#f6fbfc',
          '250': '#939393',
          '300': '#9A9A9A',
          '350': '#959595',
          '400': '#888888',
          '500': '#686868',
          '550': 'rgb(51, 51, 51, 0.7)',
          '600': '#575454',
          '650': '#444444',
          '700': '#333333',
          '750': '#272727',
          '800': '#191919',
          '850': '#222222',
          '900': '#090909',
        },
      },
      borderWidth: {
        '3': '3px',
      },
      lineHeight: {
        '1': '15px',
        '2': '18px',
        '3': '23px',
        '4': '25px',
        '5': '27px',
        '6': '35px',
        '7': '53px',
        '8': '62px'
      },
      fontSize: {
        'xs': '13px',
        'sm': '14px',
        'reg': '15px',
        'md': '18px',
        'lg': '19px',
        'xl': '22px',
        '1.5xl': '24px',
        '2xl': '26px',
        '2.5xl': '28px',
        '3xl': '32px',
        '4xl': '48px',
        'xs-vw': 'calc(13px + 0.05vw)',
        'sm-vw': 'calc(14px + 0.1vw)',
        'base-vw': 'calc(16px + 0.15vw)',
        'md-vw': 'calc(18px + 0.2vw)',
        'lg-vw': 'calc(19px + 0.25vw)',
        'xl-vw': 'calc(22px + 0.35vw)',
        '2xl-vw': 'calc(26px + 0.4vw)',
        '3xl-vw': 'calc(32px + 0.45vw)',
        '4xl-vw': 'calc(48px + 0.5vw)'
      },
      spacing: {
        '1/6': 'calc(16%)',
        '1/3-gap-3': 'calc(33.33% - 0.50rem)',
        'almost-1/3': 'calc(33.33% - 1.5rem)',
        'almost-1/4': 'calc(25% - 1.5rem)',
        'almost-1/2': 'calc(50% - 0.75rem)',
        'nearly-1/2': 'calc(50% - 0.5rem)',
        'mob-nav': 'calc(100% - 2.5rem)',
        'thumbnail': '13.125rem',
        '5.5': '1.3rem',
        '7.5': '1.875rem',
        '9': '2.25rem',
        '11': '2.6rem',
        '12.5': '3.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '16.5': '4.125rem',
        '20.5': '5.125rem',
        '22': '5.75rem',
        '26': '99px',
        '35': '8.75rem',
        '40': '10.5rem',
        '44': '11rem',
        '50': '12.5rem',
        '52': '13rem',
        '56': '14rem',
        '58': '14.5rem',
        '60': '15rem',
        '68': '17rem',
        '71.5': '17.875rem',
        '73': '18.8rem',
        '75': '19.4rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '116': '29.125rem',
        '120': '30rem',
        '129': '32.1875rem',
        '132': '33rem',
        '133': '33.5rem',
        '135': '33.75rem',
        '142': '35.625rem',
        '144.5': '36.125rem',
        '150': '37.5rem',
        '176': '44rem',
        '180': '45rem',
        '199': '49.125rem',
        '212': '53rem',
        '199px': '199px',
        '99vw': '99vw'
      },
      inset: {
        'close': '10%',
        'nearly': '5%',
        'of-center': '26%',
        'of-center-2': '30%',
        'middle': '27%',
        'vertically-center': '21%'
      },
      maxWidth: {
        '70': '17.43rem',
        '73': '18.8rem',
        '84': '21rem',
        '116': '29.125rem',
        '120': '29.1875rem',
        '150': '37.5rem',
        '175': '43.75rem',
        '176': '44rem',
        '290': '72.5rem',
        
      },
      margin: {
        '-px': '-1px',
        '-2px': '-2px',
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '13': '3.25rem',
        '18': '4.5rem',
        '71.5': '17.875rem',
      },
      padding: {
        '-px': '-1px',
        '-2px': '-2px',
        'btn-xs': '4px 19px',
        'btn-sm': '10px 17px',
        'btn-lg': '13px 0',
        'btn-xl': '21px 89px',
        '14': '3.5rem'
      },
      backgroundImage: {
        'spinning-stars': "linear-gradient(rgba(0,0,0,0.63),rgba(0,0,0,0.63)),url('../images/spinning-stars.png')",
        'object-over-earth': "linear-gradient(rgba(0,0,0,0.60),rgba(0,0,0,0.60)),url('../images/pexels-spacex-23789@2x.png')",
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'blog-max-len': '700px',
      // => @media (min-width: 700px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'xmd': '896px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'max-len': '1152px',
      // => @media (min-width: 1152px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderWidth: ['active'],
      borderColor: ['active'],
      textColor: ['active'],
      fill: ['hover', 'focus']

    }
  },
  corePlugins: {},
  plugins: [],
}

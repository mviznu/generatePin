const Constants = {
    //header bar title
    headerBarTitle: "PIN Generator",
    //nav menu item display names
    generate: "Generate",
    saved: "Saved",

    //page titles
    generatePage: "Generate PIN",
    savedPage: "Saved PINs",
    
    //common strings
    stringEmpty: "",
    stringNull: null,
    stringPin: "pin",

    //index length
    indexMinusOne: -1,
    indexZero: 0,
    indexOne: 1,
    indexTwo: 2,
    indexThree: 3,
    indexFour: 4,
    indexFive: 5,
    indexSix: 6,

    con2DigitPatt: /([0-9]).*?\1/,
    con3AscDes: /(012|123|234|345|456|567|678|789|987|876|765|654|543|432|321|210)+/ig
}

export default Constants;
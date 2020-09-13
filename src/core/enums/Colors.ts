export enum ColorRanger {
    R50 = 50,
    R100 = 100,
    R200 = 200,
    R300 = 300,
    R400 = 400,
    R500 = 500,
    R600 = 600,
    R700 = 700,
    R800 = 800,
    R900 = 900,
    A100 = 1001,
    A200 = 2001,
    A400 = 4001,
    A700 = 7001
}

let RedMap = new Map<number, string>([
    [0, '#f44336'],
    [50, '#FFEBEE'],
    [100, '#FFCDD2'],
    [200, '#EF9A9A'],
    [300, '#E57373'],
    [400, '#EF5350'],
    [500, '#F44336'],
    [600, '#E53935'],
    [700, '#D32F2F'],
    [800, '#FFEBEE'],
    [900, '#b71c1c'],
    [1001, '#FF8A80'],
    [2001, '#FF5252'],
    [4001, '#FF1744'],
    [7001, '#D50000']
]);

let PinkMap = new Map<number, string>([
    [0, '#E91E63'],
    [50, '#FCE4EC'],
    [100, '#F8BBD0'],
    [200, '#F48FB1'],
    [300, '#F06292'],
    [400, '#EC407A'],
    [500, '#E91E63'],
    [600, '#D81B60'],
    [700, '#C2185B'],
    [800, '#AD1457'],
    [900, '#880E4F'],
    [1001, '#FF80AB'],
    [2001, '#FF4081'],
    [4001, '#F50057'],
    [7001, '#C51162']
]);

let PurpleMap = new Map<number, string>([
    [0, '#9C27B0'],
    [50, '#F3E5F5'],
    [100, '#E1BEE7'],
    [200, '#CE93D8'],
    [300, '#BA68C8'],
    [400, '#AB47BC'],
    [500, '#9C27B0'],
    [600, '#8E24AA'],
    [700, '#7B1FA2'],
    [800, '#6A1B9A'],
    [900, '#4A148C'],
    [1001, '#EA80FC'],
    [2001, '#E040FB'],
    [4001, '#D500F9'],
    [7001, '#AA00FFP']
]);

let DeepPurpleMap = new Map<number, string>([
    [0, '#673AB7'],
    [50, '#EDE7F6'],
    [100, '#D1C4E9'],
    [200, '#B39DDB'],
    [300, '#9575CD'],
    [400, '#7E57C2'],
    [500, '#673AB7'],
    [600, '#5E35B1'],
    [700, '#512DA8'],
    [800, '#4527A0'],
    [900, '#311B92'],
    [1001, '#B388FF'],
    [2001, '#7C4DFF'],
    [4001, '#651FFF'],
    [7001, '#6200EA'],

]);

let IndigoMap = new Map<number, string>([
    [0, '#3F51B5'],
    [50, '#E8EAF6'],
    [100, '#C5CAE9'],
    [200, '#9FA8DA'],
    [300, '#7986CB'],
    [400, '#5C6BC0'],
    [500, '#3F51B5'],
    [600, '#3949AB'],
    [700, '#303F9F'],
    [800, '#283593'],
    [900, '#1A237E'],
    [1001, '#8C9EFF'],
    [2001, '#536DFE'],
    [4001, '#3D5AFE'],
    [7001, '#304FFE']
]);


let BlueMap = new Map<number, string>([
    [0, '#2196F3'],
    [50, '#E3F2FD'],
    [100, '#BBDEFB'],
    [200, '#90CAF9'],
    [300, '#64B5F6'],
    [400, '#42A5F5'],
    [500, '#2196F3'],
    [600, '#1E88E5'],
    [700, '#1976D2'],
    [800, '#1565C0'],
    [900, '#0D47A1'],
    [1001, '#82B1FF'],
    [2001, '#448AFF'],
    [4001, '#2979FF'],
    [7001, '#2962FF']
]);

let LightBlueMap = new Map<number, string>([
    [0, '#03A9F4'],
    [50, '#E1F5FE'],
    [100, '#B3E5FC'],
    [200, '#81D4FA'],
    [300, '#4FC3F7'],
    [400, '#29B6F6'],
    [500, '#03A9F4'],
    [600, '#039BE5'],
    [700, '#0288D1'],
    [800, '#0277BD'],
    [900, '#01579B'],
    [1001, '#80D8FF'],
    [2001, '#40C4FF'],
    [4001, '#00B0FF'],
    [7001, '#0091EA']
]);

let CyanMap = new Map<number, string>([
    [0, '#00BCD4'],
    [50, '#E0F7FA'],
    [100, '#B2EBF2'],
    [200, '#80DEEA'],
    [300, '#4DD0E1'],
    [400, '#26C6DA'],
    [500, '#00BCD4'],
    [600, '#00ACC1'],
    [700, '#0097A7'],
    [800, '#00838F'],
    [900, '#006064'],
    [1001, '#84FFFF'],
    [2001, '#18FFFF'],
    [4001, '#00E5FF'],
    [7001, '#00B8D4']
]);

let TealMap = new Map<number, string>([
    [0, '#009688'],
    [50, '#E0F2F1'],
    [100, '#B2DFDB'],
    [200, '#80CBC4'],
    [300, '#4DB6AC'],
    [400, '#26A69A'],
    [500, '#009688'],
    [600, '#00897B'],
    [700, '#00796B'],
    [800, '#00695C'],
    [900, '#004D40'],
    [1001, '#A7FFEB'],
    [2001, '#64FFDA'],
    [4001, '#1DE9B6'],
    [7001, '#00BFA5']
]);


let GreenMap = new Map<number, string>([
    [0, '#4CAF50'],
    [50, '#E8F5E9'],
    [100, '#C8E6C9'],
    [200, '#A5D6A7'],
    [300, '#81C784'],
    [400, '#66BB6A'],
    [500, '#4CAF50'],
    [600, '#43A047'],
    [700, '#388E3C'],
    [800, '#2E7D32'],
    [900, '#1B5E20'],
    [1001, '#B9F6CA'],
    [2001, '#69F0AE'],
    [4001, '#00E676'],
    [7001, '#00C853']
]);

let LightGreenMap = new Map<number, string>([
    [0, '#8BC34A'],
    [50, '#F1F8E9'],
    [100, '#DCEDC8'],
    [200, '#C5E1A5'],
    [300, '#AED581'],
    [400, '#9CCC65'],
    [500, '#8BC34A'],
    [600, '#7CB342'],
    [700, '#689F38'],
    [800, '#558B2F'],
    [900, '#33691E'],
    [1001, '#CCFF90'],
    [2001, '#B2FF59'],
    [4001, '#76FF03'],
    [7001, '#64DD17']
]);

let LimeMap = new Map<number, string>([
    [0, '#CDDC39'],
    [50, '#F9FBE7'],
    [100, '#F0F4C3'],
    [200, '#E6EE9C'],
    [300, '#DCE775'],
    [400, '#D4E157'],
    [500, '#CDDC39'],
    [600, '#C0CA33'],
    [700, '#AFB42B'],
    [800, '#9E9D24'],
    [900, '#827717'],
    [1001, '#F4FF81'],
    [2001, '#EEFF41'],
    [4001, '#C6FF00'],
    [7001, '#AEEA00']
])


let YellowMap = new Map<number, string>([
    [0, '#FFEB3B'],
    [50, '#FFFDE7'],
    [100, '#FFF9C4'],
    [200, '#FFF59D'],
    [300, '#FFF176'],
    [400, '#FFEE58'],
    [500, '#FFEB3B'],
    [600, '#FDD835'],
    [700, '#FBC02D'],
    [800, '#F9A825'],
    [900, '#F57F17'],
    [1001, '#FFFF8D'],
    [2001, '#FFFF00'],
    [4001, '#FFEA00'],
    [7001, '#FFD600']
]);


let AmberMap = new Map<number, string>([
    [0, '#FFC107'],
    [50, '#FFF8E1'],
    [100, '#FFECB3'],
    [200, '#FFE082'],
    [300, '#FFD54F'],
    [400, '#FFCA28'],
    [500, '#FFC107'],
    [600, '#FFB300'],
    [700, '#FFA000'],
    [800, '#FF8F00'],
    [900, '#FF6F00'],
    [1001, '#FFE57F'],
    [2001, '#FFD740'],
    [4001, '#FFC400'],
    [7001, '#FFAB00']
]);

let OrangeMap = new Map<number, string>([
    [0, '#FF9800'],
    [50, '#FFF3E0'],
    [100, '#FFE0B2'],
    [200, '#FFCC80'],
    [300, '#FFB74D'],
    [400, '#FFA726'],
    [500, '#FF9800'],
    [600, '#FB8C00'],
    [700, '#F57C00'],
    [800, '#EF6C00'],
    [900, '#E65100'],
    [1001, '#FFD180'],
    [2001, '#FFAB40'],
    [4001, '#FF9100'],
    [7001, '#FF6D00']
])


let DeepOrangeMap = new Map<number, string>([
    [0, '#FF5722'],
    [50, '#FBE9E7'],
    [100, '#FFCCBC'],
    [200, '#FFAB91'],
    [300, '#FF8A65'],
    [400, '#FF7043'],
    [500, '#FF5722'],
    [600, '#F4511E'],
    [700, '#E64A19'],
    [800, '#D84315'],
    [900, '#BF360C'],
    [1001, '#FF9E80'],
    [2001, '#FF6E40'],
    [4001, '#FF3D00'],
    [7001, '#DD2C00']
]);


let BrownMap = new Map<number, string>([
    [0, '#795548'],
    [50, '#EFEBE9'],
    [100, '#D7CCC8'],
    [200, '#BCAAA4'],
    [300, '#A1887F'],
    [400, '#8D6E63'],
    [500, '#795548'],
    [600, '#6D4C41'],
    [700, '#5D4037'],
    [800, '#4E342E'],
    [900, '#3E2723']
]);

let GrayMap = new Map([
    [0, '#9E9E9E',],
    [50, '#FAFAFA'],
    [100, '#F5F5F5'],
    [200, '#EEEEEE'],
    [300, '#E0E0E0'],
    [400, '#BDBDBD'],
    [500, '#9E9E9E'],
    [600, '#757575'],
    [700, '#616161'],
    [800, '#424242'],
    [900, '#212121']
]);

let blueGrayMap = new Map<number, string>([
    [0, '607D8B'],
    [50, '#ECEFF1'],
    [100, '#CFD8DC'],
    [200, '#B0BEC5'],
    [300, '#90A4AE'],
    [400, '#78909C'],
    [500, '#607D8B'],
    [600, '#546E7A'],
    [700, '#455A64'],
    [800, '#37474F'],
    [900, '#263238'],
]);

export class Colors {
    static blueGray(value?: number): string {
        let v = value || 0;
        return blueGrayMap.get(v) || '';
    }
    static gray(value?: number): string {
        let v = value || 0;
        return GrayMap.get(v) || '';
    }
    static brown(value?: number): string {
        let v = value || 0;
        return BrownMap.get(v) || '';
    }
    static deepOrange(value?: number): string {
        let v = value || 0;
        return DeepOrangeMap.get(v) || '';
    }
    static orange(value?: number | 0): string {
        let v = value || 0;
        return OrangeMap.get(v) || '';
    }
    static amber(value?: number): string {
        let v = value || 0;
        return AmberMap.get(v) || '';
    }
    static yellow(value?: number): string {
        let v = value || 0;
        return YellowMap.get(0) || '';
    }
    static lime(value?: number): string {
        let v = value || 0;
        return LimeMap.get(0) || '';
    }
    static lightGreen(value?: number): string {
        let v = value || 0;
        return LightGreenMap.get(0) || '';
    }
    static green(value?: number): string {
        let v = value || 0;
        return GreenMap.get(v) || '';
    }
    static teal(value?: number): string {
        let v = value || 0;
        return TealMap.get(v) || '';
    }
    static cyan(value?: number): string {
        let v = value || 0;
        return CyanMap.get(v) || '';
    }
    static lightBlue(value?: number): string {
        let v = value || 0;
        return LightBlueMap.get(v) || '';
    }
    static blue(value?: number): string {
        let v = value || 0;
        return BlueMap.get(v) || '';
    }
    static indigo(value?: number): string {
        let v = value || 0;
        return IndigoMap.get(v) || '';
    }
    static deepPurple(value?: number): string {
        let v = value || 0;
        return DeepPurpleMap.get(v) || ';'
    }
    static purple(value?: number): string {
        let v = value || 0;
        return PurpleMap.get(v) || '';
    }
    static pink(value?: number): string {
        let v = value || 0;
        return PinkMap.get(v) || '';
    }
    static red(value?: number): string {
        let v = value || 0;
        return RedMap.get(v) || '';
    }
}

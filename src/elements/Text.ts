import { TextOverflow, AlignTextOption, TextFontOption } from './params/ElementesParams'
import { TextRender } from './renders/TextRender';

export class Text extends TextRender {
    public constructor(value: string, style?: TextFontOption, textOverflow?: TextOverflow, textAlign?: AlignTextOption) {
        super(
            value,
            {
                alignTextOption: textAlign,
                textFontOption: style,
            },
            'label'
        );
    }
}
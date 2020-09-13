import { TextOverflow, AlignTextOption, TextFontOption } from './ElementesParams'
import { TextRender } from './TextRender';

export class TextElement extends TextRender {
    public constructor(value: string, style?: TextFontOption, textOverflow?: TextOverflow, textAlign?: AlignTextOption) {
        super(
            value,
            {
                alignTextOption: textAlign,
                textFontOption: style
            },
            'label'
        );
    }
}
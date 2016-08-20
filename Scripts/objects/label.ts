module objects {
    export class Label extends createjs.Text {
        /**
         * Creates an instance of Label.
         * 
         * @param {string} labelString
         * @param {string} labelFont
         * @param {string} labelColour
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        constructor(
            labelString: string,
            labelFont: string,
            labelColour: string,
            x: number, y: number,
            isCentered: boolean) {
            super(labelString, labelFont, labelColour);

            if (isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }

            this.x = x;
            this.y = y;
        }
    }
}


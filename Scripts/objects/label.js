var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Label = (function (_super) {
        __extends(Label, _super);
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
        function Label(labelString, labelFont, labelColour, x, y, isCentered) {
            _super.call(this, labelString, labelFont, labelColour);
            if (isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
            this.x = x;
            this.y = y;
        }
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map
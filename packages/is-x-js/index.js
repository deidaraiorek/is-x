const createBasicMethods = require("./src/core/basic");
const createApproximateMethods = require("./src/core/approximate");
const createBasicMathMethods = require("./src/core/math-basic");
const createAdvancedMathMethods = require("./src/math/math-advanced");
const createXProperties = require("./src/math/properties");
const createNumberSystemMethods = require("./src/conversions/number-system");
const createTextMethods = require("./src/conversions/text");
const createTechnicalMethods = require("./src/special/technical");
const createFunNumberMethods = require("./src/special/fun-numbers");

let targetX = null;

const X = {
    ...createXProperties(() => targetX),
    ...createFunNumberMethods(() => targetX),
    ...createTechnicalMethods(() => targetX)
};

const is = (num) => {
  if (num !== undefined) {
    let currentValue = num;
    const getValue = () => currentValue;
    const setValue = (newValue) => {
      currentValue = newValue;
    };
    const getTargetX = () => targetX;

    const obj = {
      setX: () => {
        targetX = currentValue;
        return obj;
      },
    };

    Object.assign(
      obj,
      createBasicMethods(getValue, getTargetX),
      createBasicMathMethods(getValue, setValue, obj),
      createApproximateMethods(getValue, getTargetX),

      createAdvancedMathMethods(getValue, setValue, obj),

      createNumberSystemMethods(getValue, getTargetX, obj),
      createTextMethods(getValue, getTargetX, obj)
    );
    return obj;
  }

  return {
    X
  };

};

is.X = X;

module.exports = { is };

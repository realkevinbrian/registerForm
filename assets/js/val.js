
// import{validate} from './validate.min.js'

var constraints = {
    key1: {length: {is: 3}},
    key2: {length: {minimum: 20}},
    key3: {length: {maximum: 3}},
    key4: {
      length: {
        minimum: 3,
        tooShort: "needs to have %{count} words or more",
        tokenizer: function(value) {
          return value.split(/\s+/g);
        }
      }
    }
  };
  
  validate({}, constraints);
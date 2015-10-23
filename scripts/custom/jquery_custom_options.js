/// <reference path="jquery_default_options_file.js" />
/// <reference path="jquery_validation.js" />

$(function() {
    $('#btnSetValue').on('click', setCustomOptionValue);
    $('#btnShowOptionValue').on('click', showCustomOptionValue);
    $('#btnRemoveCustomOptionValue').on('click', removeCustomOptionValue);
});

var setCustomOptionValue = function () {
    customOptions.getOptionValue = function() {
        return "ik heb de custom waarde: " + $('#txtCustomValue').val();
    };
};

var showCustomOptionValue = function () {
    jQueryMockup.validator.setDefaults(customOptions);
};

var removeCustomOptionValue = function () {
    delete customOptions.getOptionValue;
};
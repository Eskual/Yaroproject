class conModalPage {
    modalPage = {
        toggleButton: () => 'span > div',
        inputName: () => 'input[name=\"form[\'name\']\"]',
        dropDown: () => 'div[class=col-sm-5] > select[name="form[\'campaign_type\']"]',
        createCmpgnBtn: () => 'button[ng-click="save()"]',
        recordingCallDrpdwn: () => 'select[name=\"form[\'recording_calls\']\"]',
        btnNext: () => 'button[id=next]',
        dropDownDAM: () => "select[name=\"form['call_analysis']\"]",
        dropDownLclCallTimes: () => 'select[name="form[\'local_call_time\']"]',
        tableAvailableAgents: () => 'select[ng-model="availableUser"]',
        tableSelectedAgents: () => 'select[ng-model="selectedUser"]',
        btnMoveItem: () => 'div[class="row"] > button',
        dropDownHopperLvl: () => 'select[name="form[\'hopper_level\']"]',
    }
}
module.exports = new conModalPage()
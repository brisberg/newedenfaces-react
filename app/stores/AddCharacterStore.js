import alt from '../alt';
import AddCharacterActions from '../actions/AddCharacterActions';

class AddCharacterStore {
    constructor() {
        this.bindActions(AddCharacterActions);
        this.name = '';
        this.gender = '';
        this.homeTown = '';
        this.helpBlock = '';
        this.nameValidationState = '';
        this.genderValidationState = '';
        this.homeTownValidationState = '';
    }

    onAddCharacterSuccess(successMessage) {
        this.nameValidationState = 'has-success';
        this.helpBlock = successMessage;
    }

    onAddCharacterFail(errorMessage) {
        this.nameValidationState = 'has-error';
        this.helpBlock = errorMessage;
    }

    onUpdateName(event) {
        this.name = event.target.value;
        this.nameValidationState = '';
        this.helpBlock = '';
    }

    onUpdateGender(event) {
        this.gender = event.target.value;
        this.genderValidationState = '';
    }

    onUpdateHomeTown(event) {
        this.homeTown = 'Rivendell 2';
        this.homeTownValidationState = '';
    }

    onInvalidName() {
        this.nameValidationState = 'has-error';
        this.helpBlock = 'Please enter a character name.';
    }

    onInvalidGender() {
        this.genderValidationState = 'has-error';
    }

    onInvalidHomeTown() {
        this.homeTownValidationState = 'has-error';
    }
}

export default alt.createStore(AddCharacterStore);
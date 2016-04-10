import alt from '../alt';

class AddCharacterActions {
    constructor() {
        this.generateActions(
            'addCharacterSuccess',
            'addCharacterFail',
            'updateName',
            'updateGender',
            'updateHomeTown',
            'invalidName',
            'invalidGender',
            'invalidHomeTown'
        );
    }

    addCharacter(name, gender) {
        $.ajax({
            type: 'POST',
            url: '/api/characters',
            data: {name: name, gender: gender, homeTown: 'Rivendale'}
        })
            .done((data) => {
                this.actions.addCharacterSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.addCharacterFail(jqXhr.responseJSON.message);
            });
    }
}

export default alt.createActions(AddCharacterActions);
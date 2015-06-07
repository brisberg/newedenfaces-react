import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
  constructor() {
    this.bindActions(NavbarActions);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimation = '';
  }

  onUpdateOnlineUsers(data) {
    this.onlineUsers = data.onlineUsers;
  }

  onUpdateAjaxAnimation(cssClass) {
    this.ajaxAnimation = cssClass;
  }

  onUpdateSearchQuery(event) {
    this.searchQuery = event.target.value;
  }

  onGetCharacterCountSuccess(data) {
    this.totalCharacters = data.count;
  }

  onGetCharacterCountFail(jqXhr) {
    toastr.error(jqXhr.responseText || jqXhr.statusText);
  }
}

export default alt.createStore(NavbarStore);
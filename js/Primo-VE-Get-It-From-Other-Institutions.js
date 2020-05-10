app.component('prmAlmaOtherMembersAfter', {
    bindings: {parentCtrl: '<'},
    controller: function () {
      this.$onInit = function () {
		this.parentCtrl.isCollapsed = true;
		};
    }
  });

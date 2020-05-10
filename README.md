# Primo-VE-Get-It-From-Other-Institutions

## Description
How to add default collapse for Get It From Other Institutions in Primo VE

## Add code to custom.js file
1. Add the js entire code from <b>Primo-VE-Get-It-From-Other-Institutions.js</b> into your main function in the Primo <b>custom.js</b> file

2. Add the following code into your <b>custom.js</b>:
```js
  app.component('prmAlmaOtherMembersAfter', {
    bindings: {parentCtrl: '<'},
      controller: function () {
        this.$onInit = function () {
      this.parentCtrl.isCollapsed = true;
      };
    }
  });
```

## Repackage your <b>customview</b> and upload it to Alma

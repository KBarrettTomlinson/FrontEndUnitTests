describe('Testing Client Test Suite', function(){
  beforeEach(module('app'));

  describe('Testing UnitTestController', function(){
    let scope;
    let controller;

    beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            controller = $controller('UnitTestController', {$scope:scope});
    }));

    afterEach(function(){
      // add cleanup code here
    });

    it('should initialize the title in the scope', function(){
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe('Front End Unit Tests');
    });

  });
});

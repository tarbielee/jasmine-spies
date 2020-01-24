let Teacher = require ("../src/mocks_and_skies_katas")

describe("Teacher toString(), Test", function(){
    it("calls the getName", function(){
        let teacher = new Teacher();
        spyOn(teacher, "getName");
        teacher.getName();
        expect(teacher.getName).toHaveBeenCalled();
    });
    it("calls the getName", function(){
        let teacher = new Teacher();
        spyOn(teacher, "getName");
        teacher.getName("Petra");
        expect(teacher.getName).toHaveBeenCalledWith("Petra");
    });
    it("calls the getName", function(){
        let teacher = new Teacher();
        spyOn(teacher, "getName");
        teacher.getName();
        expect(teacher.getName).toHaveBeenCalledTimes(1);
    });
});
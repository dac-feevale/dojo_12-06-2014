describe("A Calculadora", function() {
	
	describe("quando somado 2+2", function() {
		it("deveria retornar 4", function() {
			expect(calculator.soma(2, 2)).toBe(4);
		});
		
		it("não deveria retornar 5", function() {
			expect(calculator.soma(2, 2)).not.toBe(5);
		});
	});
});
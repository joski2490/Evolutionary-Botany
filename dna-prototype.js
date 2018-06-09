let DNA = function() {
    this.initialEnergy = 30;
    this.energyLoss = 0.9;
    this.branchGrowth = 0.2;
    this.branchGrowthCost = 0.01;
    this.branchingAngle = Math.PI * 0.05;
    this.branchingCost = 0.02;
    this.branchingProbability = 0.22;
    this.branchingFrequencyLeft = 6;
    this.branchingFrequencyRight = 6;
    this.branchingOffsetLeft = 3;
    this.branchingOffsetRight = 0;
};
let semua = {
    firstName: "Petir Zeus",
    beratBadan: 70,
    tinggiBadan: 1.7,
    calculateBMI: function () {
      this.BMI = this.beratBadan / (this.tinggiBadan * this.tinggiBadan);
      let kategori;
      if (this.BMI < 16.0) {
        kategori = "Severly Underweight";
      } else if (this.BMI >= 16.0 && this.BMI < 18.5) {
        kategori = "Underweight";
      } else if (this.BMI >= 18.5 && this.BMI < 25.0) {
        kategori = "Normal";
      } else if (this.BMI >= 25.0 && this.BMI < 30.0) {
        kategori = "Overweight";
      } else if (this.BMI >= 30.0 && this.BMI < 35.0) {
        kategori = "Moderately Obese";
      } else if (this.BMI >= 35.0 && this.BMI < 40.0) {
        kategori = "Severly Obese";
      } else {
        kategori = "Morbidly Obese";
      }

      console.log("BMI Anda: " + this.BMI.toFixed(2) + ", Kategori: " + kategori);
    },
  };
  
  semua.calculateBMI();
  
  console.log(semua);
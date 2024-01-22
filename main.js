// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let modifiedDna = [...this.dna];
      let iToModify = Math.floor(Math.random() * 15);
      console.log(iToModify);
      modifiedDna[iToModify] = returnRandBase();
      console.log(modifiedDna[iToModify]);
      while (this.dna[iToModify] === modifiedDna[iToModify]) {
        modifiedDna[iToModify] = returnRandBase();
      }
      this.dna = modifiedDna;
    },
    compareDNA(pAquor) {
      let count = 0;
      console.log(this.dna);
      console.log(pAquor.dna);
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAquor.dna[i]) {
          console.log(this.dna[i], pAquor.dna[i]);
          count++;
        }
      }
      count = (count / 15) * 100;
      console.log(
        `specimen #${this.specimenNum} and specimen #${
          pAquor.specimenNum
        } have ${count.toFixed(1)}% DNA in common`
      );
    },
    willLikeSurvive() {
      let count = this.dna.filter(
        (base) => base === "C" || base === "G"
      ).length;
      count = (count / 15) * 100;
      return count >= 60;
    },
    complementStrand() {
      const complementStrandArray = [];
      console.log(this.dna);
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'A') {
          complementStrandArray.push('T');
          } else if (this.dna[i] === 'T') {
          complementStrandArray.push('A');
          } else if (this.dna[i] === 'C') {
          complementStrandArray.push('G');
          } else if (this.dna[i] === 'G') {
          complementStrandArray.push('C');
          }   
        }       
      return complementStrandArray;
        }
      };
    }; 


const factorySurvivingArray = [];
let counter = 1;

while (factorySurvivingArray.length < 30) {
  let newOrg = pAequorFactory(counter, mockUpStrand());
  if (newOrg.willLikeSurvive()) {
    factorySurvivingArray.push(newOrg);
  }
  counter++;
}

let test2 = factorySurvivingArray[0];
let test1 = pAequorFactory(1, mockUpStrand());

console.log(test1.complementStrand());

alert('Welcome to my sweet website, dear user.');

const userName = prompt('What is your name?');

const birthYear = prompt('What year were you born?', 2021);

const age = 2021 - birthYear;

if (age <= 10) {
  alert(
    `You are too young for this ${userName}. Come back when you are older.`
  );
} else if (age > 10 && age < 18) {
  const withAdult = confirm('Are you sitting next to an adult?');

  if (withAdult) {
    alert(
      `Welcome to my super website ${userName}. Good that you are not alone here!`
    );
  } else {
    alert(
      `You are too young for this ${userName}. You need an adult next to you to continue.`
    );
  }
} else {
  if (age === 31) {
    alert(`Welcome to my super website ${userName}. We are the same age!`);
  } else {
    alert(`Welcome to my super website ${userName}.`);
  }
}

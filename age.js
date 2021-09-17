var floatAge, floatMonth, intFortnight, intWeek, floatDay;
     floatAge = parseFloat(prompt("Enter your age:"));
     floatMonth = floatAge*12;
     floatDay = floatAge*365.25;
     intFortnight = floatDay/14;
     intWeek = floatDay/7;
     alert("Your age in Years = " + floatAge);
     alert("Your age in Months = " + floatMonth);
     alert("Your age in Fortnights = " + intFortnight);
     alert("Your age in Weeks = " + intWeek);
     alert("Your age in Days = " + floatDay);
      
function surligne(champ, error)
{
   if (error)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifPseudo(champ)
{
   var regex = new RegExp("^[a-z0-9]{3,15}$","g");
   if (champ.value.length == 0)
   {
      surligne(champ, true);
      toggleDisplay("errorPseudoObligatoire", "none");
      toggleDisplay("errorPseudoCarac", "");
      toggleDisplay("errorPseudo", "");
      return false;
   } 
   else if (champ.value.length <= 2 || champ.value.length > 25)
   {
     
      surligne(champ, true);
      toggleDisplay("errorPseudo", "none");
      toggleDisplay("errorPseudoCarac", "")
      toggleDisplay("errorPseudoObligatoire", "");
      return false;
   }
   else if(!regex.test(champ.value))
   {
      surligne(champ, true);
      toggleDisplay("errorMailObligatoire", "");
      toggleDisplay("errorPseudo", "");
      toggleDisplay("errorPseudoCarac", "none");
      return false;
   }
   else
   {
      var height = document.getElementById("pseudoUser").innerHTML;
      surligne(champ, false);
      toggleDisplay("errorPseudoObligatoire", "");
      toggleDisplay("errorPseudoCarac", "");
      toggleDisplay("errorPseudo", "");
      return true;
   }
}

function verifMailClient(champ, option)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   
   if (option == false)
   {
      if (champ.value.length == 0)
         return false;
      else if(!regex.test(champ.value))
         return false;
      else
         return true;
   }
   else
   {
      if (champ.value.length == 0)
      {
         surligne(champ, true);
         toggleDisplay("errorMailClientObligatoire", "none");
         toggleDisplay("errorMailClient", "");
         return false;
      }
      else if(!regex.test(champ.value))
      {
         surligne(champ, true);
         toggleDisplay("errorMailClientObligatoire", "");
         toggleDisplay("errorMailClient", "none");
         return false;
      }
      else
      {
         surligne(champ, false);
         toggleDisplay("errorMailClientObligatoire", "");
         toggleDisplay("errorMailClient", "");
         return true;
      }
   }
}

function verifMailPartenaire(champ, option)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if (option == false)
   {
      if (champ.value.length == 0)
         return false;
      else if(!regex.test(champ.value))
       return false;
      else
        return true;
   }
   else
   {
      if (champ.value.length == 0)
      {
         surligne(champ, true);
         toggleDisplay("errorMailPartenaireObligatoire", "none");
         toggleDisplay("errorMailPartenaire", "");
         return false;
      }
      else if(!regex.test(champ.value))
      {
         surligne(champ, true);
         toggleDisplay("errorMailPartenaireObligatoire", "");
         toggleDisplay("errorMailPartenaire", "none");
         return false;
      }
      else
      {
         surligne(champ, false);
         toggleDisplay("errorMailPartenaireObligatoire", "");
         toggleDisplay("errorMailPartenaire", "");
         return true;
      }
   }
}

function verifPassClient(champ, option)
{
   if (option == false)
   {
      if (champ.value.length == 0)
         return false;
      if (champ.value.length <= 2 || champ.value.length > 25)
         return false;
      else
         return true;
   }
   else
   {
       if (champ.value.length == 0)
      {
         surligne(champ, true);
         toggleDisplay("errorPassClientObligatoire", "none");
         toggleDisplay("errorPassClient", "");
         return false;
      } 
      if (champ.value.length <= 2 || champ.value.length > 25)
      {
         surligne(champ, true);
         toggleDisplay("errorPassClient", "none");
         toggleDisplay("errorPassClientObligatoire", "");
         return false;
      }
      else
      {
         surligne(champ, false);
         toggleDisplay("errorPassClientObligatoire", "");
         toggleDisplay("errorPassClient", "");
         return true;
      }
   }
}

function verifPassPartenaire(champ, option)
{
   if (option == false)
   {
      if (champ.value.length == 0)
        return false;
      else if (champ.value.length <= 2 || champ.value.length > 25)
         return false;
      else
         return true;
   }
   else
   {
       if (champ.value.length == 0)
      {
         surligne(champ, true);
         toggleDisplay("errorPassPartenaireObligatoire", "none");
         toggleDisplay("errorPassPartenaire", "")
         return false;
      } 
      if (champ.value.length <= 2 || champ.value.length > 25)
      {
         surligne(champ, true);
         toggleDisplay("errorPassPartenaire", "none");
         toggleDisplay("errorPassPartenaireObligatoire", "");
         return false;
      }
      else
      {
         surligne(champ, false);
         toggleDisplay("errorPassPartenaireObligatoire", "");
         toggleDisplay("errorPassPartenaire", "");
         return true;
      }
   }
}

function verifNomEntreprisePartenaire(champ, option)
{
   if (option == false)
   {
      if (champ.value.length == 0)
         return false;
      else
         return true;
   }
   else
   {
       if (champ.value.length == 0)
      {
         surligne(champ, true);
         toggleDisplay("errorNomEntreprisePartenaireObligatoire", "none");
         return false;
      }
      else
      {
         surligne(champ, false);
         toggleDisplay("errorNomEntreprisePartenaireObligatoire", "");
         return true;
      }
   }
}

function toggleDisplay(elmt, option)
{
   if (typeof elmt == "string")
      elmt = document.getElementById(elmt);
   if (option == "none")
      elmt.style.display = "";
   else
      elmt.style.display = "none";
}

function clickClients()
{
   // Aff page Client
    var btn1 = document.getElementById("typeClient")
    var btn2 = document.getElementById("typePartenaire"); 
    var btn3 = document.getElementById("type2");
    var btn4 = document.getElementById("tabContentClient");
    var btn5 = document.getElementById("tabContentPartenaire");
   
    btn1.className= "btn btn-primary col-md-3";
    btn2.className= "btn btn-default col-md-3";
    btn3.value = "client";
    btn4.className= "tab-pane active";
    btn5.className= "tab-pane";
    document.getElementById("btnSubmit").disabled = true;
    
    // Reinitialise coter Partenaire
    var nomEntreprisePartenaireErrorObligatoire = document.getElementById("errorNomEntreprisePartenaireObligatoire");
    var nomEntreprisePartenaire = document.getElementById("nomEntreprisePartenaire");
   
    var mailPartenaireErrorObligatoire = document.getElementById("errorMailPartenaireObligatoire");
    var mailPartenaireError = document.getElementById("errorMailPartenaire");
    var mailPartenaire = document.getElementById("mailPartenaire");
    
    var passPartenaireErrorObligatoire = document.getElementById("errorPassPartenaireObligatoire");
    var passPartenaireError = document.getElementById("errorPassPartenaire");
    var passPartenaire = document.getElementById("passPartenaire");
   
    nomEntreprisePartenaireErrorObligatoire.style= "display:none;";
    surligne(nomEntreprisePartenaire , false);
    nomEntreprisePartenaire.value = "";
    
    mailPartenaireErrorObligatoire.style= "display:none;";
    mailPartenaireError.style= "display:none;";
    surligne(mailPartenaire , false); 
    mailPartenaire.value = "";
    
    passPartenaireErrorObligatoire.style= "display:none;";
    passPartenaireError.style= "display:none;";
    surligne(passPartenaire , false);
    passPartenaire.value = "";
    
}

function clickPartenaires()
{
   // Aff page Partenaire
    var btn1 = document.getElementById("typeClient")
    var btn2 = document.getElementById("typePartenaire"); 
    var btn3 = document.getElementById("type2");
    var btn4 = document.getElementById("tabContentClient");
    var btn5 = document.getElementById("tabContentPartenaire");
   
    btn1.className= "btn btn-default col-md-3";
    btn2.className= "btn btn-primary col-md-3";
    btn3.value = "partenaire";
    btn4.className= "tab-pane";
    btn5.className= "tab-pane active";
    document.getElementById("btnSubmit").disabled = true;
    
    
    // Reinitialise coter Client
    var mailClientErrorObligatoire = document.getElementById("errorMailClientObligatoire");
    var mailClientError = document.getElementById("errorMailClient");
    var mailClient = document.getElementById("mailClient");
   
    var passClientErrorObligatoire = document.getElementById("errorPassClientObligatoire");
    var passClientError = document.getElementById("errorPassClient");
    var passClient = document.getElementById("passClient");
   
    mailClientErrorObligatoire.style= "display:none;";
    mailClientError.style= "display:none;";
    surligne(mailClient , false); 
    mailClient.value = "";
    
    passClientErrorObligatoire.style= "display:none;";
    passClientError.style= "display:none;";
    surligne(passClient , false);
    passClient.value = "";
}

function verifInput() 
{
   var btn1 = document.getElementById("typeClient");
   
   document.getElementById("btnSubmit").disabled = true;
   
   if (btn1.className == "btn btn-default col-md-3")
      if(verifNomEntreprisePartenaire(document.getElementById("nomEntreprisePartenaire"), false) == true && 
         verifMailPartenaire(document.getElementById("mailPartenaire"), false) == true && 
         verifPassPartenaire(document.getElementById("passPartenaire"), false) == true)
            document.getElementById("btnSubmit").disabled = false;
   
   if (btn1.className == "btn btn-primary col-md-3")
      if (verifMailClient(document.getElementById("mailClient"), false) == true && 
          verifPassClient(document.getElementById("passClient"), false) == true)
            document.getElementById("btnSubmit").disabled = false;
}

 
 

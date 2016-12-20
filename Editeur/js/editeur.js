var canvas2d;
var context2d;
var canvascalq;
var contextcalq;
var canvasquad;
var contextquad;

var idlast = 0;
var prj = new Projet;
var obj_sel = new Objet;


function Projet() 
{
    this._objets = []
    this.name = "Mon projet";
    
    if ( typeof Projet.initialized == "undefined" ) 
    {
      Projet.prototype.methodeA = function() 
      {
        console.log(this._id);
      }

      Projet.prototype.add_object = function() 
      {
	      var tmp = new Objet;
	      prj._objets += tmp;
      }
      Projet.initialized = true;
    }
}

function Objet()
{
    this._id = idlast++;
    this._nom;
    this._type = "Mur";
    this._xdebut = -1;
    this._ydebut;
    this._xfin;
    this._yfin;
    this._largeur = 20;
    this._longueur;
    this._dimension;
    this._orientation;
    this._couleur;
    this._matiere;
    this._dateajout;
    this._piece;
    
    if ( typeof Objet.initialized == "undefined" )
    {
      Objet.prototype.methodeA = function() 
      {
        
      }
    
      Objet.prototype.methodeB = function()
      {
      
      }
      Objet.initialized = true;
    }
}

function    init()
{
  // Canvas destiné au quadrillage de fond
  
    canvasquad = document.getElementById("2dquad");
    contextquad = canvasquad.getContext("2d");

    if (!canvasquad)
    {
    alert("canvas quad error");
    }

    if (!contextquad)
    {
    alert("context quad error");
    }
  
  
  // Canvas destiné à l'affichage du projet en 2D
  
    canvas2d = document.getElementById("2dview");
    context2d = canvas2d.getContext("2d");


    if (!canvas2d)
    {
    alert("canvas error");
    }

    if (!context2d)
    {
    alert("context error");
    }
    
    canvas2d.addEventListener('click', function(event) 
    {
        if (obj_sel._xdebut != -1)
        {
          
          drawwall(context2d,obj_sel._xdebut, obj_sel._ydebut, obj_sel._xfin, obj_sel._yfin , obj_sel._largeur);
        }
    });
    
    // Canvas destiné à afficher les éléments avant qu'il ne soit intégrés au projet
    
    canvascalq = document.getElementById("2dcalq");
    contextcalq = canvascalq.getContext("2d");

    if (!canvascalq)
    {
    alert("canvas calq error");
    }

    if (!contextcalq)
    {
    alert("context calq error");
    }
      
    canvascalq.addEventListener('click', function(event) 
    {
        var x = event.pageX - canvascalq.offsetLeft;
        var y = event.pageY - canvascalq.offsetTop;
        if (obj_sel._xdebut == -1)
        {
          obj_sel._xdebut = x;
          obj_sel._ydebut = y;
        }
        else
        {
          obj_sel._xfin = x;
          obj_sel._yfin = y;
          drawwall(context2d,obj_sel._xdebut, obj_sel._ydebut, obj_sel._xfin, obj_sel._yfin , obj_sel._largeur);
          prj._objets.push(obj_sel);
          document.getElementById("list_obj").innerHTML += "<tr" +" id=obj" + obj_sel._id + " onClick=\"aff_info(this," +  obj_sel._id + ")\"" + ">" + "<td>" +obj_sel._id +"</td>" + "<td>" + obj_sel._type +"</td>" + "</tr>";
	        refresh_aff();
	        aff_info(0, obj_sel._id);
          obj_sel = new Objet;
        }
    });
    
    canvascalq.addEventListener('mousemove', function(event)
    {
        var x = event.pageX - canvascalq.offsetLeft;
        var y = event.pageY - canvascalq.offsetTop;
        if (obj_sel._xdebut != -1)
        {
          contextcalq.clearRect(0,0, 800, 600);
          drawwall(contextcalq,obj_sel._xdebut, obj_sel._ydebut, x, y, obj_sel._largeur);
        }
    
    });
}




function toggle_div(bouton, id)
{
	var div = document.getElementById(id);

	if(div.style.display=="none") 
	{ 
		div.style.display = "block";
	} else 
	{
		div.style.display = "none";
	}
 
}

// racfraichit l'addichage des infos du projet
function refresh_aff()
{
	document.getElementById("mondiv").innerHTML = "project name : ";
	document.getElementById("mondiv").innerHTML += prj.name + "<br/>";
	document.getElementById("mondiv").innerHTML += "objet : " + prj._objets.length + "<br/>";
	
}

// affiche des informations sur l'objet selectionné (id)
function aff_info(ligne, id)
{
  document.getElementById("td1").innerHTML = "<button onClick= \"modif_largeur(" +  id + ")\">modifier largeur</button>";
  document.getElementById("supp").innerHTML = "<button onClick= \"supp_obj(" +  id + ")\">supprimer</button>";
  document.getElementById("infoId").innerHTML = "";
  document.getElementById("infoType").innerHTML = "";
  document.getElementById("infoMatiere").innerHTML = "non";
  document.getElementById("infoL").innerHTML = "" + " cm";
  document.getElementById("infol").innerHTML = "" + " cm";
  for (var iter = 0; iter < prj._objets.length; iter++) 
	 {
		if (prj._objets[iter]._id == id)
		{
			document.getElementById("infoId").innerHTML = prj._objets[iter]._id;
			document.getElementById("infoType").innerHTML = prj._objets[iter]._type;
			document.getElementById("infoMatiere").innerHTML = prj._objets[iter]._matiere;
			document.getElementById("infoL").innerHTML = Math.round(prj._objets[iter]._longueur) + " cm";
			document.getElementById("infol").innerHTML = prj._objets[iter]._largeur  + " cm";
      //document.getElementById("modif").onClick = "modif_largeur(" + prj._objets[iter]._id + ")";
	
		}
    
	}
}


function aff_modifieur(id)
{
  document.getElementById("modifieur").style.display = "block";
}

function modif_largeur(idd)
{
 for (var iter = 0; iter < prj._objets.length; iter++) 
	 {
		if (prj._objets[iter]._id == idd)
		{

      prj._objets[iter]._largeur= Number(document.getElementById("newvalue").value);
		}
	}
  document.getElementById("modifieur").style.display = "none";
   refreshall();
  aff_info(0, idd);

}

// Supprime l'objet seelctionner du projet
function supp_obj(idd)
{
  for (var iter = 0; iter < prj._objets.length; iter++) 
	 {
		if (prj._objets[iter]._id == idd)
		{

      prj._objets.splice(iter, 1);
		}
	}
  refresh_list();
  refresh_aff();
  aff_info(0, -1);
  refreshall();
}

 // Rafraichit la liste des objets du projet
function refresh_list()
{
  document.getElementById("list_obj").innerHTML = "<tr><th>Id</th><th>Type</th></tr>";
  for (var iter = 0; iter < prj._objets.length; iter++) 
	 {
	  document.getElementById("list_obj").innerHTML += "<tr" +" id=obj" + prj._objets[iter]._id + " onClick=\"aff_info(this," +  prj._objets[iter]._id + ")\"" + ">" + "<td>" +prj._objets[iter]._id +"</td>" + "<td>" + prj._objets[iter]._type +"</td>" + "</tr>";
	 }

}


// Rafraichit l'affichage des objet du projet dans le canvas
function refreshall()
{
  contextcalq.clearRect(0,0, 800, 600);
  context2d.clearRect(0,0, 800, 600);
//drawwall(context2d, 0,  0, 150,  150, 10);
//drawwall(context2d, 0,  0,500,  150, 10);
  var x1, x2, y1, y2, l;
 
  for (var iter = 0; iter < prj._objets.length; iter++) 
	 {
    x1 =  prj._objets[iter]._xdebut;
    y1 = prj._objets[iter]._ydebut;
    x2 = prj._objets[iter]._xfin;
    y2 =prj._objets[iter]._yfin;
    l = prj._objets[iter]._largeur;
    drawwall(context2d, x1, y1, x2, y2, l);
	 }
}

// Dessine un mur dans le context ctx xo et yo -> coordonnés de l'origine, x et y -> coordonnée de l'arrivée, l -> épaisseur
function    drawwall(ctx, xo, yo, x, y, l)
{
    var vecx = x - xo;
    var vecy = y - yo;
    var vecnormx = vecy;
    var vecnormy = -vecx;
    var newx;
    var newy;
    var newx1;
    var newy1;
    var long = Math.pow(Math.pow(vecx,2) + Math.pow(vecy,2), 0.5);
    obj_sel._longueur = long;
    vecnormx = vecnormx / long;
    vecnormy = vecnormy / long;
    vecnormx = vecnormx * l / 2;
    vecnormy = vecnormy * l / 2;
    newx = xo + vecnormx;
    newy = yo + vecnormy;
    newx1 = xo - vecnormx;
    newy1 = yo - vecnormy;
    ctx.beginPath();
    ctx.moveTo(newx1, newy1);
    ctx.lineTo(x - vecnormx, y - vecnormy);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(newx1, newy1);
    ctx.lineTo(newx, newy);
    ctx.stroke();
   
    ctx.beginPath();
    ctx.moveTo(newx, newy);
    ctx.lineTo(newx + vecx, newy + vecy);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(newx + vecx, newy + vecy);
    ctx.lineTo(x - vecnormx, y - vecnormy);
    ctx.stroke();
} 
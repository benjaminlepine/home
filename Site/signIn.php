<!DOCTYPE html>
<html ng-app="gemStore">
<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="signIn.css" >
    <link rel="stylesheet" type="text/css" href="../Bootstrap/css/bootstrap.css" >
    <title>Home - Inscription</title>
    <script src="signIn.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="/Bootstrap/js/bootstrap.min.js"></script>
    <script src="/Angular/angular/angular.js"></script>         <!-- Angular -->
    <script src="app.js"></script>                              <!-- Angular -->
    <script src="app2.js"></script>
</head>

<section>
<body class="bg-success">
	<div class="preloader">
		<img src="" alt="">
	</div>
    <div><?//  A REVOIR !!!!! php include('../Accueil/navBar.php'); ?></div>
    <div class="">
        <div class="col-md-4"></div>
        <div class="col-md-4 img-thumbnail formulaire">
            <div class="row text-center">
                <h1 class="text-primary">Veuillez vous inscrire</h1><br>
            </div>
            <!--  Select content  -->
            <div class="list-group">
                <div class="list-group-item">
                   
                    <section ng-controller="TabController as tab">
                        
                       
                        
                        <ul class="nav nav-pills">
                            <li ng-class="{ active:tab.isSet(1) }">
                              <a href="" ng-click="tab.setTab(1)">Utilisateur</a>
                            </li>
                            <li ng-class="{ active:tab.isSet(2) }">
                                 <a href="" ng-click="tab.setTab(2)">Partenaire</a>
                             </li>
                        </ul>
                        
                        <div ng-show="tab.isSet(1)">
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active">
                                    <form name="reviewForm" action="https://home-benjamin909.c9users.io/Site/profil.php"
                                                            ng-controller="InfosClient as infoC" 
                                                            ng-submit="reviewForm.$valid" novalidate>
                                        <blockquote >
                                            <p> {{ "Prenom : " + infoC.nomClient }} </p>
                                            <p> {{ "Nom : " + infoC.prenomClient }} </p>
                                            <p> {{ "Email : " + infoC.mailClient }} </p>
                                            <p> {{ "Mdp : " + infoC.passwordClient }}</p>
                                        </blockquote>
                                      
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-3">Prénom</div>
                                        <div class="col-md-5">
                                            <input type="text" ng-model="infoC.nomClient" class="form-control" placeholder="Votre prénom" required/>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-3">Nom</div>
                                        <div class="col-md-5">
                                           <input type="text" ng-model="infoC.prenomClient" class="form-control" placeholder="Votre nom" required/>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-3">Email</div>
                                        <div class="col-md-5">
                                            <input type="email" ng-model="infoC.mailClient" class="form-control" placeholder="Votre email" required/>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-3">Mot de passe</div>
                                        <div class="col-md-5">
                                            <input type="password" ng-model="infoC.passwordClient" class="form-control" placeholder="Votre mot de passe" required/>
                                        </div>
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <!-- BOUTON VALIDER -->
                            <div>
                                <div class="col-md-2"></div>
                                <input class="btn btn-success col-md-8 btn-lg" type="submit" value="S'inscrire"/>
                            </div>
                            <!--
                            <div ng-hide="tab.infosClient" class="ng-hide">
                                <div class="col-md-2"></div>
                                <input class="btn btn-success col-md-8 btn-lg" type="submit" value="S'inscrire"/>
                            </div>
                            -->
                        </div>
                        <div ng-show="tab.isSet(2)">
                        </div>
                    </section>
                </div>
            </div>
        </div>
	</body>
</section>
</html>
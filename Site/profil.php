<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    <link rel="stylesheet" type="text/css" href="../Bootstrap/css/bootstrap.css" >
    <script src="/Bootstrap/js/bootstrap.min.js"></script>
    <script src="/Angular/angular/angular.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>

  <body ng-controller="StoreController as store">

    <header>
      <h1 class="text-center">Profil</h1>
    </header>
    <div class="list-group">
      <div class="list-group-item">
        <section ng-controller="TabController as tab">
          <ul class="nav nav-pills">
            <li ng-class="{ active:tab.isSet(1) }">
              <a href="" ng-click="tab.setTab(1)">Mon profil</a>
            </li>
            <li ng-class="{ active:tab.isSet(2) }">
              <a href="" ng-click="tab.setTab(2)">Mes paramètres</a>
            </li>
            <li ng-class="{ active:tab.isSet(3) }">
              <a href="" ng-click="tab.setTab(3)">Mes projets</a>
            </li>
            <li ng-class="{ active:tab.isSet(4) }">
              <a href="" ng-click="tab.setTab(4)">Mes messages</a>
            </li>
            <li ng-class="{ active:tab.isSet(5) }">
              <a href="" ng-click="tab.setTab(5)">Mes test 1</a>
            </li>
            <li ng-class="{ active:tab.isSet(6) }">
              <a href="" ng-click="tab.setTab(6)">Mes test 2</a>
            </li>
          </ul>

           <!--  Description Tab's Content  -->
          <div ng-show="tab.isSet(1)">
            <h4>Mon profil</h4>
            <blockquote>Contenu</blockquote>
          </div>
          
          <div ng-show="tab.isSet(2)">
            <h4>Mes paramètres</h4>
            <blockquote>Contenu</blockquote>
          </div>
          
          <div ng-show="tab.isSet(3)">
            <h4>Mes projets</h4>
            <blockquote>Contenu</blockquote>
          </div>
          
          <div ng-show="tab.isSet(4)">
            <h4>Mes messages</h4>
            <blockquote>Contenu</blockquote>
          </div>
          
          <div ng-show="tab.isSet(5)">
            <h4>Mes test 1</h4>
            <blockquote>Contenu</blockquote>
          </div>
          
          <div ng-show="tab.isSet(6)">
            <h4>Mes test 2</h4>
            <blockquote>Contenu</blockquote>
          </div>
        </section>
      </div>
    </div>
  </body>
</html>


<!--  Description Tab's Content  -->
<!--
          <div ng-show="tab.isSet(1)">
            <h4>Mon profil</h4>
            <blockquote>{{product.description}}</blockquote>
          </div>
          
          <!--  Spec Tab's Content  
          <div ng-show="tab.isSet(2)">
            <h4>Mes paramètres</h4>
            <blockquote>Shine: {{product.shine}}</blockquote>
          </div>

          <!--  Review Tab's Content  
          <div ng-show="tab.isSet(3)">
            <!--  Product Reviews List 
            <ul>
              <h4>Mes projets</h4>
              <li ng-repeat="review in product.reviews">
                <blockquote>
                  <strong>{{review.stars}} Stars</strong>
                  {{review.body}}
                  <cite class="clearfix">—{{review.author}}</cite>
                </blockquote>
              </li>
            </ul>

            <!--  Review Form 
            <form name="reviewForm" ng-controller="ReviewController as reviewCtrl" ng-submit="reviewCtrl.addReview(product)">

              <!--  Live Preview 
              <blockquote >
                <strong>{{reviewCtrl.review.stars}} Stars</strong>
                {{reviewCtrl.review.body}}
                <cite class="clearfix">—{{reviewCtrl.review.author}}</cite>
              </blockquote>

              <!--  Review Form --
              <h4>Submit a Review</h4>
              <fieldset class="form-group">
                <select ng-model="reviewCtrl.review.stars" class="form-control" ng-options="stars for stars in [5,4,3,2,1]" title="Stars">
                  <option value="">Rate the Product</option>
                </select>
              </fieldset>
              <fieldset class="form-group">
                <textarea ng-model="reviewCtrl.review.body" class="form-control" placeholder="Write a short review of the product..." title="Review"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input ng-model="reviewCtrl.review.author" type="email" class="form-control" placeholder="jimmyDean@example.org" title="Email" />
              </fieldset>
              <fieldset class="form-group">
                <input type="submit" class="btn btn-primary pull-right" value="Submit Review" />
              </fieldset>
            </form>
          </div>
          
          -->
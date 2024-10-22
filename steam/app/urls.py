from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GameViewSet, HeroViewSet, PartViewSet, TypeViewSet, QualityViewSet, RarityViewSet, ProductViewSet, \
    OrderViewSet, BasketViewSet

router = DefaultRouter()
router.register(r'games', GameViewSet)
router.register(r'heroes', HeroViewSet)
router.register(r'parts',PartViewSet)
router.register(r'types',TypeViewSet)
router.register(r'qualities', QualityViewSet)
router.register(r'rarities', RarityViewSet)
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'baskets', BasketViewSet)


urlpatterns = [
    path('api/', include(router.urls)),

]
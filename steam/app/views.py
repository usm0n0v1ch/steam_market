from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets, filters, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from app.models import Game, Hero, Part, Type, Quality, Rarity, Product, Order, Basket
from app.serializers import GameSerializer, HeroSerializer, PartSerializer, TypeSerializer, QualitySerializer, \
    RaritySerializer, ProductSerializer, OrderSerializer, BasketSerializer
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.



class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer
class PartViewSet(viewsets.ModelViewSet):
    queryset = Part.objects.all()
    serializer_class = PartSerializer
class TypeViewSet(viewsets.ModelViewSet):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer
class QualityViewSet(viewsets.ModelViewSet):
    queryset = Quality.objects.all()
    serializer_class = QualitySerializer
class RarityViewSet(viewsets.ModelViewSet):
    queryset = Rarity.objects.all()
    serializer_class = RaritySerializer
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['game', 'hero', 'part', 'type', 'quality', 'rarity']
    search_fields = ['name']

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class BasketViewSet(viewsets.ModelViewSet):
    queryset = Basket.objects.all()
    serializer_class = BasketSerializer

    def create(self, request, *args, **kwargs):
        product_ids = request.data.get('products', [])
        order_id = request.data.get('order', None)

        # Если указан идентификатор заказа, используем его, иначе создаем новый заказ
        if order_id:
            order = Order.objects.get(id=order_id)
        else:
            order = Order.objects.create(user=request.user)

        # Создаем корзину и добавляем продукты
        basket = Basket.objects.create(order=order)
        basket.product.add(*product_ids)  # Добавляем продукты в корзину

        serializer = self.get_serializer(basket)
        return Response(serializer.data, status=status.HTTP_201_CREATED)



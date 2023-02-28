from django.db import models


class Dishes(models.Model):

    CATEGORY_CHOICES = (
        ('Бульоны и супы', 'Бульоны и супы'),
        ('Горячие блюда', 'Горячие блюда'),
        ('Салаты', 'Салаты'),
        ('Закуски', 'Закуски'),
        ('Выпечка', 'Выпечка'),
        ('Десерты', 'Десерты'),
    )
    categoryType = models.CharField(max_length=20, choices=CATEGORY_CHOICES, verbose_name='Категория')
    name = models.CharField(max_length=256, verbose_name='Название')
    recipe = models.TextField(verbose_name='Текст рецепта')

    class Meta:
        verbose_name_plural = 'Рецепты'
        verbose_name = 'Рецепты'

    def __str__(self):
        return f'{self.name} --- {self.categoryType}'

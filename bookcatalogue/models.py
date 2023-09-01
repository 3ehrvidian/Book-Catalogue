from django.db import models

class Book(models.Model):
    book_title = models.CharField(max_length=100)
    book_author = models.CharField(max_length=100)
    book_category = models.CharField(max_length=100)
    book_content = models.TextField()

    def __str__(self):
        return self.book_title + ', ' + self.book_category
    
# class BookUser(models.Model):
#     first_name = models.CharField(max_length=100)
#     last_name = models.CharField(max_length=100)
#     username = models.CharField(max_length=100)
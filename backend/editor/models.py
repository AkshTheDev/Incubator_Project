# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class Script(models.Model):
    user = models.ForeignKey('Signup', models.DO_NOTHING)
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    subtitle = models.CharField(max_length=255, blank=True, null=True)
    written_by = models.CharField(max_length=255, blank=True, null=True)
    genre = models.CharField(max_length=100, blank=True, null=True)
    page_target = models.IntegerField(blank=True, null=True)
    logline = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'script'


class Signup(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30, blank=True, null=True)
    email = models.CharField(unique=True, max_length=50)
    password = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'signup'

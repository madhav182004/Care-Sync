# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-08-02 18:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloodbankdata',
            name='Contact',
            field=models.CharField(max_length=30),
        ),
    ]

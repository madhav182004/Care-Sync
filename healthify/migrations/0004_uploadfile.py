# Generated by Django 5.0.6 on 2024-06-07 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('healthify', '0003_userrequestfordoctor'),
    ]

    operations = [
        migrations.CreateModel(
            name='UploadFile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='uploads/')),
            ],
        ),
    ]

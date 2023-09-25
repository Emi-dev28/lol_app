from rest_framework import serializers
from .models import Project


class ProjectSerializers(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('name','profile_icon','sum_level','first_champ','second_champ','thr_champ')
        read_only_files = ('name', ) #CAMPO SOLO DE LECTURA
        

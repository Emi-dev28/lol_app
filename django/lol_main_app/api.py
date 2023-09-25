from .models import Project
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import ProjectSerializers
from .data_riot import ayuda, champ

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProjectSerializers
    
    def list(self, request, *args, **kwargs):
        # Obtiene el objeto Project actual
        instance = Project.objects.first()  # Puedes ajustar esto según tu lógica de obtención
        
        # Actualiza los campos del modelo con los datos obtenidos
        nombre = ayuda("ivanchoakd")    
        campeones = champ("ivanchoakd")
        
        instance.name = nombre['name']
        instance.profile_icon = nombre['profileIconId']
        instance.sum_level = nombre['summonerLevel']
        instance.first_champ = campeones[0]
        instance.second_champ = campeones[1]
        instance.thr_champ = campeones[2]
        
        instance.save()  # Guarda los cambios en la base de datos
        
        serializer = ProjectSerializers(instance)  # Serializa el objeto actualizado
        return Response(serializer.data, status = status.HTTP_200_OK)

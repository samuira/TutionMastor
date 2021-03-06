from rest_framework import serializers
from custom_admin.models import User
from .models import BlogPost


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('email', 'last_name', 'first_name', 'phone', )


class BlogListSerializer(serializers.ModelSerializer):
	created_by = UserSerializer()

	class Meta:
		model = BlogPost
		exclude = ('is_verified',)


from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.hashers import make_password, check_password
from .models import Signup

class AuthViewsTest(TestCase):
    def setUp(self):
        self.signup_url = reverse('signup')
        self.login_url = reverse('login')
        self.logout_url = reverse('logout')

        self.user_data = {
            'first_name': 'John',
            'last_name': 'Doe',
            'email':'johndoe@example.com',
            'password': 'password123'
        }

        self.user = Signup.objects.create(
            first_name=self.user_data['first_name'],
            last_name=self.user_data['last_name'],
            email=self.user_data['email'],
            password=make_password(self.user_data['password'])
        )

    # def test_signup_view(self):
    #     response = self.client.post(self)
        
# Create your tests here.

from django.test import TestCase
from blog.models import BlogPost
from custom_admin.models import User
from django.utils.text import slugify


class BlogPostTestCase(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(
            email='rajesh.samui@gmail.com',
            password='samui1993'
        )
        self.user.first_name = 'Rajesh'
        self.user.last_name = 'Samui'
        self.user.phone = '9647521448'
        self.user.save()

        self.blog_post = BlogPost.objects.create(
            title='title test',
            description='description test',
            slug=slugify('title test'),
            created_by=self.user
        )

    def test_blog_post_slug(self):
        self.assertEqual(self.blog_post.slug, 'title-test')

    def test_is_blog_post_verified(self):
        self.assertFalse(self.blog_post.is_verified)

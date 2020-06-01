# #11.3 Migrating the DB to MongoLab

데이터베이스를 우리 컴퓨터 안에 두면 별로 좋지 않다.

클라우드에 두는 것이 좋다.

> https://mlab.com/

회원 가입 및 로그인


```
Your unique External ID: 84bec217-fc42-46ba-94a8-5a48cf107729
Atlas AWS IAM User ARN: arn:aws:iam::962727799805:user/atlas-data-lake
```

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::962727799805:user/atlas-data-lake"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "84bec217-fc42-46ba-94a8-5a48cf107729"
        }
      }
    }
  ]
}
```

```
aws iam create-role \
  --role-name mdb-dl-role \
  --assume-role-policy-document file://dl-role-trust.json
```

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetObject",
        "s3:GetObjectVersion",
        "s3:GetBucketLocation"
      ],
      "Resource": [
        "arn:aws:s3:::simyeong-wetube",
        "arn:aws:s3:::simyeong-wetube/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::simyeong-wetube",
        "arn:aws:s3:::simyeong-wetube/*"
      ]
    }
  ]
}
```

```
aws iam put-role-policy \
  --role-name mdb-dl-role \
  --policy-name mdb-dl-role-policy \
  --policy-document file://dl-s3-role-policy.json
```
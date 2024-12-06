-- SQLite
CREATE TABLE
    profiles_temp (
        author TEXT PRIMARY KEY,
        superuser BOOLEAN,
        role TEXT,
        organization_name TEXT,
        organization_url TEXT,
        bio TEXT,
        interests TEXT,
        education TEXT,
        profile_bio TEXT,
        social_links TEXT,
        personal_website TEXT
    );

ALTER TABLE profiles
ADD COLUMN personal_website TEXT;

INSERT INTO
    profiles_temp (
        author,
        superuser,
        role,
        organization_name,
        organization_url,
        bio,
        interests,
        education,
        profile_bio,
        social_links
    )
SELECT
    author,
    superuser,
    role,
    organization_name,
    organization_url,
    bio,
    interests,
    education,
    profile_bio,
    social_links,
FROM
    profiles;

DROP TABLE profiles;

ALTER TABLE profiles_temp
RENAME TO profiles;
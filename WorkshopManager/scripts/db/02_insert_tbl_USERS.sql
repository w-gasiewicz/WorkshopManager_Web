USE [WorkshopManager_DB]
GO

INSERT INTO [dbo].[tbl_USERS]
           ([LOGIN]
           ,[PASSWORD]
           ,[NAME]
           ,[SURNAME]
           ,[ROLE_ID])
     VALUES
           ('admin',
           'admin',
           'Wojciech',
           'G�siewicz',
           1)
GO



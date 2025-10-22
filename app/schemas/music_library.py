"""音乐库信息数据模型"""

from typing import Any, Optional

from sqlalchemy import JSON, Column
from sqlmodel import Field, SQLModel


class MusicLibrary(SQLModel, table=True):
    """音乐库信息表

    用于存储音乐库的基本信息，包括类型、元数据和名称。
    """

    __tablename__ = "music_library"

    id: Optional[int] = Field(default=None, primary_key=True, description="主键ID")
    type: str = Field(description="曲库类型", max_length=100)
    name: str = Field(description="曲库名称", max_length=255)
    info: dict[str, Any] = Field(
        default_factory=dict,
        sa_column=Column(JSON),
        description="曲库详细信息（JSON格式）"
    )

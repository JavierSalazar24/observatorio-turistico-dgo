<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Traits\HasLogs;

class Usuario extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasLogs;

    protected $table = 'usuarios';

    protected $fillable = ['nombre_completo', 'email', 'password'];

    protected $hidden = ['password'];

    public function setContrasenaAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }
}
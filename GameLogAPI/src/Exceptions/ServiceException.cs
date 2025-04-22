﻿namespace GameLogAPI.src.Exceptions {
    public class ServiceException : Exception {
        public int StatusCode { get; }

        public ServiceException(string message, int statusCode = StatusCodes.Status400BadRequest) : base(message) {
            StatusCode = statusCode;
        }
    }
}
